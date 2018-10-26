// Function to determine marker size based on population
// function markerSize(population) {
//   return population;
// }

// An array containing all of the information needed to create city and state markers
var pop = [
  {
    coordinates: [33.158092,-117.350594],
    city: {
      name: "Carlsbad",
      population: 112299
    },
    accident: {
      name: "Carlsbad",
      population: 511
    }
   },
  {
    coordinates: [32.640053,-117.084198],
    city: {
      name: "Chula vista",
      population: 260988
    },
    accident: {
      name: "Chula vista",
      population: 1008
    }
  },
  {
    coordinates: [32.693932,-117.190483],
    city: {
      name: "Coronado",
      population: 24910
    },
    accident: {
      name: "Coronado",
      population: 97
    }
  },
  {
    coordinates: [32.800892,-116.961418],
    city: {
      name: "El Cajon",
      population: 103091
    },
    accident: {
      name: "El Cajon",
      population: 696
    }
  },
  {
    coordinates: [33.13036,-117.085358],
    city: {
      name: "Escondido",
      population: 150243
    },
    accident: {
      name: "Escondido",
      population: 1093
    }
  },
  {
    coordinates: [32.583944,-117.113085],
    city: {
      name: "Imperial beach",
      population: 27149
    },
    accident: {
      name: "Imperial beach",
      population: 22
    }
  },
  {
    coordinates: [32.766029,-117.022369],
    city: {
      name: "La Mesa",
      population: 59177
    },
    accident: {
      name: "La Mesa",
      population: 335
    }
  },
  {
    coordinates: [32.740528,-117.026367],
    city: {
      name: "Lemon grove",
      population: 26511
    },
    accident: {
      name: "Lemon grove",
      population: 46
    }
  },
  {
    coordinates: [32.678109,-117.099197],
    city: {
      name: "National city",
      population: 60343
    },
    accident: {
      name: "National city",
      population: 296
    }
  },
  {
    coordinates: [33.195869,-117.379486],
    city: {
      name: "Oceanside",
      population: 174558
    },
    accident: {
      name: "Oceanside",
      population: 839
    }
  },
  {
    coordinates: [32.98637,-117.023491],
    city: {
      name: "Poway",
      population: 49848
    },
    accident: {
      name: "Poway",
      population: 98
    }
  },
  {
    coordinates: [33.139469,-117.161148],
    city: {
      name: "San Marcos",
      population: 92929
    },
    accident: {
      name: "San Marcos",
      population: 362
    }
  },
  {
    coordinates: [32.838383,-116.973917],
    city: {
      name: "Santee",
      population: 57052
    },
    accident: {
      name: "Santee",
      population: 107
    }
  },
  {
    coordinates: [32.99056,-117.269132],
    city: {
      name: "Solana beach",
      population: 13337
    },
    accident: {
      name: "Solana beach",
      population: 51
    }
  },
  {
    coordinates: [33.202419,-117.235626],
    city: {
      name: "Vista",
      population: 98079
    },
    accident: {
      name: "Vista",
      population: 403
    }
  },
  {
    coordinates: [33.0448,-117.29245],
    city: {
      name: "Encinitas",
      population: 62254
    },
    accident: {
      name: "Encinitas",
      population: 236
    }
  }
];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var accidentMarkers = [];

// var markers = L.markerClusterGroup();

// Loop through locations and create city and state markers
for (var i = 0; i < pop.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  cityMarkers.push(
    L.circle(pop[i].coordinates, {
      stroke: false,
      fillOpacity: 0.65,
      color: "green",
      fillColor: "green",
      radius: pop[i].city.population/50
    })
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  accidentMarkers.push(
    L.circle(pop[i].coordinates, {
      stroke: false,
      fillOpacity: 0.8,
      color: "purple",
      fillColor: "purple",
      radius: pop[i].accident.population
    })
  );
}

// Define variables for our base layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var city = L.layerGroup(cityMarkers);
var accident = L.layerGroup(accidentMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Population": city,
  "Accident": accident
};

// Define a map object
var myMap = L.map("map", {
  center: [32.7157, -117.1611],
  zoom: 11,
  layers: [streetmap, city, accident]
});

// Pass our map layers into our layer control

// pop.forEach(location => {
// L.marker(pop.location)
  // layer.bindPopup('<h1>' + pop.city + '</h1> <hr> <h3>Population ' + pop.accident + '</h3>')
//     
//     .addTo(mymap);
// });
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);


