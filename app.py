# Dependencies
import pymongo
from flask import Flask, render_template, redirect
import flask
# from flask_pretty import Prettify
from flask import Flask
from flask import jsonify
from flask import request
import json

# Create flask app
app = Flask(__name__)
#prettify = Prettify(app)

# Connect to MongoDB
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Creating a carve out flask run for the map api
db = client.phonedata
collection = db.map_data

map_data = list(db.map_data.find())

# Create mapdata api with unique locations of rough road
@app.route('/api/mapdata', methods=['GET'])
def get_mapdata():
  output2 = []
  for s in db.map_data.find():
    output2.append({'Driver' : s['Driver'], 'Latitude' : s['Latitude'], 'Longitude' : s['Longitude'], 'G':s['G']})
  return jsonify({'result' : output2})


# Use database and create it
db = client.phonedata
collection = db.road_data

road_data = list(db.road_data.find())

# Create data page
@app.route('/data')
def data():
    road_data = list(db.road_data.find())
    return render_template('data.html', road_data=road_data)

#RESTAPI code starts here
@app.route('/api/location', methods=['GET'])
def get_all_road_data():
  output = []
  for s in db.road_data.find():
    output.append({'Driver' : s['Driver'], 'Latitude' : s['Latitude'], 'Longitude' : s['Longitude'], 'G':s['G']})
  return jsonify({'result' : output})

# a plotly page
@app.route('/plotly')
def visulization():
    return render_template('plotly.html')

# accident data page (Naazneen's visulization work)
@app.route('/accident')
def accident_visualization():
    return render_template('accident.html')

# San Diego data page (Naazneen's visulization work)
@app.route('/SanDiego')
def SanDiego_visualization():
    return render_template('accident.html')

# a root index page
@app.route('/index')
def index():
    return render_template('index_main.html')

#experimental code:  want to allow us to pull only the location records for a certain driverself.
#this code currently does not work...
@app.route('/api/driver', methods=['GET'])
def get_one_driver(driver):
  road_data = db.road_data
  s = road_data.find_one({'driver' : driver})
  if s:
    output3 = {'G' : s['G'], 'Driver' : s['driver'],'Latitude' : s['Latitude'], 'Longitude' : s['Longitude']}
  else:
    output3 = "No such name"
  return jsonify({'result' : output})

#this code works.
if __name__ == '__main__':
    app.run(debug=True)
