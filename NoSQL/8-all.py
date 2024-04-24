#!/usr/bin/env python3
"""lists all documents in a collection"""


def list_all(mongo_collection):
    """lists all documents in a collection"""
    my_doc = []
    for doc in mongo_collection.find():
        my_doc.append(doc)
    return my_doc