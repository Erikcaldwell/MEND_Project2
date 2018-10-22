# Dependencies
import pymongo
from flask import Flask, render_template, redirect
import flask
from flask_pretty import Prettify
from flask import Flask
from flask import jsonify
from flask import request


# Create flask app
app = Flask(__name__)
prettify = Prettify(app)

# Connect to MongoDB
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Use database and create it
db = client.phonedata
collection = db.road_data

road_data = list(db.road_data.find())

# Create root
@app.route('/data')
def index():
    road_data = list(db.road_data.find())
    return render_template('data.html', road_data=road_data)

#RESTAPI code starts here
@app.route('/api/location', methods=['GET'])
def get_all_road_data():
  output = []
  for s in db.road_data.find():
    output.append({'Latitude' : s['Latitude'], 'Longitude' : s['Longitude'], 'driver' : s['driver']})
  return jsonify({'result' : output})

#experimental code:  want to allow us to pull only the location records for a certain driverself.
#this code currently does not work...
@app.route('/api/driver', methods=['GET'])
def get_one_driver(driver):
  road_data = db.road_data
  s = road_data.find_one({'driver' : driver})
  if s:
    output = {'G' : s['G'], 'driver' : s['driver'],'Latitude' : s['Latitude'], 'Longitude' : s['Longitude']}
  else:
    output = "No such name"
  return jsonify({'result' : output})

#this code works.
if __name__ == '__main__':
    app.run(debug=True)
