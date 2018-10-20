import sys
import pandas as pd
import pymongo
import json
import os.path
from pymongo import MongoClient

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

dblist = myclient.list_database_names()
if "phonedata" in dblist:
  client = MongoClient('localhost', 27017)
  client.drop_database('phonedata')
  mydb = myclient['phonedata']
  mycol = mydb['road_data']
else:
    mydb = myclient['phonedata']
    mycol = mydb['road_data']

def import_content(filepath):
    mng_client = pymongo.MongoClient('localhost', 27017)
    mng_db = mng_client['phonedata']
    collection_name = 'road_data'
    db_cm = mng_db[collection_name]
    cdir = os.path.dirname(__file__)
    file_res = os.path.join(cdir, filepath)
    data = pd.read_csv(file_res)
    data = data.apply(pd.to_numeric, errors='ignore')
    data_json = json.loads(data.to_json(orient='records'))
    db_cm.remove()
    db_cm.insert(data_json)

if __name__ == "__main__":
  filepath = 'filtered.csv'
  import_content(filepath)
