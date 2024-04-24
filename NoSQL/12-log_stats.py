#!/usr/bin/env python3
"""script that provides some stats about Nginx logs stored in MongoD"""
from pymongo import MongoClient

def get_nginx_logs_stats():
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017/')
    db = client['logs']
    collection = db['nginx']

    # Total number of documents
    total_logs = collection.count_documents({})

    # Number of documents with each method
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method: collection.count_documents({"method": method}) for method in methods}

    # Number of documents with method=GET and path=/status
    status_count = collection.count_documents({"method": "GET", "path": "/status"})

    # Print stats
    print(f"{total_logs} logs where {total_logs} is the number of documents in this collection")
    print("Methods:")
    for method, count in method_counts.items():
        print(f"\t{count} logs with method={method}")
    print(f"1 log with method=GET and path=/status")

if __name__ == "__main__":
    get_nginx_logs_stats()
