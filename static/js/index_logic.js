// Creating map object
var map = L.map("map", {
  center: [32.7157, -117.1611],
  zoom: 11
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiY2NhbGR3ZTIiLCJhIjoiY2puMTF2dDlyMHFsZDN3cGJqODFwZnN0YSJ9.3tKPf44bb0h8FROFjfi6CQ"
}).addTo(map);

var link = "/api/mapdata";

// Grabbing our JSON data.
d3.json(link).then(function(data) {
  // Creating a layer with the retrieved data
  results = data.result
  results.forEach(result => {
     var coordinates = []
     coordinates.push(result.Latitude)
     coordinates.push(result.Longitude)
     L.marker(coordinates).addTo(map)
     //L.polyline(coordinates).addTo(map)
     //L.geoJSON(coordinates).addTo(map)
  });

  //L.geoJson(results).addTo(map);
});
