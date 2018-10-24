// Create a map object
var myMap = L.map("map", {
  center: [32.71991,-117.18053],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(population) {
  return population / 25;
}

// Each city object contains the city's name, location and population
var cities = [
  {
    location: [32.71991,-117.18053],
    population: 37095
  },
  {
    location: [32.72245,-117.11696],
    population: 43267
  },
  {
    location: [32.74543,-117.17017],
    population: 31066
  },
  {
    location: [32.7398,-117.12841],
    population: 44414
  },
  {
    location: [32.73661,-117.08939],
    population: 69813
  },
  {
    location: [32.70837,-117.23244],
    population: 19330
  },
  {
    location: [32.73501,-117.24107],
    population: 28651
  },
  {
    location: [32.774,-117.14745],
    population: 18858
  },
  {
    location: [32.7907,-117.23359],
    population: 45787
  },
  {
    location: [32.76876,-117.20369],
    population: 25341
  },
  {
    location: [32.80704,-117.16516],
    population: 45096
  },
  {
    location: [32.69567,-117.12109],
    population: 56066
  },
  {
    location: [32.70957,-117.05174],
    population: 65433
  },
  {
    location: [32.75667,-117.0708],
    population: 58560
  },
  {
    location: [32.76642,-117.12919],
    population: 31680
  },
  {
    location: [32.8189,-117.19777],
    population: 51332
  },
  {
    location: [32.67172,-117.16443],
    population: 23575
  },
  {
    location: [32.80621,-117.03257],
    population: 23057
  },
  {
    location: [32.79491,-117.07549],
    population: 26317
  },
  {
    location: [32.9003,-117.20674],
    population: 4179
  },
  {
    location: [32.85674,-117.20717],
    population: 43728
  },
  {
    location: [32.80875,-117.13761],
    population: 26823
  },
  {
    location: [32.81998,-117.09177],
    population: 30443
  },
  {
    location: [32.91104,-117.14479],
    population: 73343
  },
  {
    location: [33.02317,-117.12418],
    population: 39337
  },
  {
    location: [32.99416,-117.07531],
    population: 47490
  },
  {
    location: [32.96581,-117.1262],
    population: 51536
  },
  {
    location: [32.94702,-117.2022],
    population: 48940
  },
  {
    location: [32.91539,-117.08356],
    population: 32787
  },
  {
    location: [32.72761,-117.14702],
    population: 198
  },
  {
    location: [32.69876,-117.20759],
    population: 571
  },
  {
    location: [32.67989,-117.04706],
    population: 35125
  },
  {
    location: [32.73703,-117.19976],
    population: 3435
  },
  {
    location: [32.86941,-117.12126],
    population: 1449
  },

  {
    location: [32.7294,-117.1591],
    population: 559
  },
  {
    location: [32.56785,-116.99026],
    population: 79708
  },
  {
    location: [32.67532,-117.16182],
    population: 550
  },
  {
    location: [32.55469,-117.05132],
    population: 29429
  }
];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "green",
    fillColor: "purple",
    druggable:"true",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(cities[i].population)
  }).bindPopup("<h1>"+cities[i].location + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
}
