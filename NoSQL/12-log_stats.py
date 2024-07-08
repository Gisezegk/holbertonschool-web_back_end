#!/usr/bin/env python3
"""script that provides some stats about Nginx logs stored in MongoD"""
from pymongo import MongoClient


def analyze_logs(logs):
    """ analyze logs function """
    methods = {
        'GET': 0,
        'POST': 0,
        'PUT': 0,
        'PATCH': 0,
        'DELETE': 0
    }

    status_check = 0

    for my_doc in logs:
        method = my_doc.get('method', '')
        if method in methods:
            methods[method] += 1

        path = my_doc.get('path', '')
        if path == '/status':
            status_check += 1
    return methods, status_check


def print_results(log_count, methods, status_check):
    """script that provides some stats about Nginx logs stored in MongoDB"""
    print(f"{log_count} logs\nMethods:")
    for method, count in methods.items():
        print(f"\tmethod {method}: {count}")
    print(f"{status_check} status check")


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx
    logs = list(nginx_collection.find())
    log_count = len(logs)

    methods, status_check = analyze_logs(logs)

    print_results(log_count, methods, status_check)
