# Dependencies
import pymongo
from flask import Flask, render_template, redirect
import flask
from flask_pretty import Prettify

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
    return render_template('index.html', road_data=road_data)


if __name__ == '__main__':
    app.run(debug=True)
