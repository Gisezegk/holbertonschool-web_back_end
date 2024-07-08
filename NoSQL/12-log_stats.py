#!/usr/bin/env python3
"""Script that provides some stats about Nginx logs stored in MongoDB."""
from pymongo import MongoClient


def print_results(log_count, methods, status_check):
    """Print the results."""
    print(f"{log_count} logs\nMethods:")
    for method, count in methods.items():
        print(f"\tmethod {method}: {count}")
    print(f"{status_check} status check")


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    log_count = nginx_collection.count_documents({})

    methods = {
        'GET': nginx_collection.count_documents({'method': 'GET'}),
        'POST': nginx_collection.count_documents({'method': 'POST'}),
        'PUT': nginx_collection.count_documents({'method': 'PUT'}),
        'PATCH': nginx_collection.count_documents({'method': 'PATCH'}),
        'DELETE': nginx_collection.count_documents({'method': 'DELETE'}),
    }

    status_check = nginx_collection.count_documents({'method': 'GET', 'path': '/status'})

    print_results(log_count, methods, status_check)
