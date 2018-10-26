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
    coordinates: [32.895246,-117.133494],
    city: {
      name: "Blossom Valley",
      population: 70687
    },
    accident: {
      name: "Blossom Valley",
      population: 0
    }
  },
  {
    coordinates: [32.664798,-117.015962],
    city: {
      name: "Bonita",
      population: 12885
    },
    accident: {
      name: "Bonita",
      population: 0
    }
  },
  {
    coordinates: [33.276248,-117.199621],
    city: {
      name: "Bonsall",
      population: 4294
    },
    accident: {
      name: "Bonsall",
      population: 0
    }
  },
  {
    coordinates: [33.255356,-116.356947],
    city: {
      name: "Borrego Springs",
      population: 2328
    },
    accident: {
      name: "Borrego Springs",
      population: 0
    }
  },
{
    coordinates: [32.807551,-116.936415],
    city: {
      name: "Bostonia",
      population: 16295
    },
    accident: {
      name: "Bostonia",
      population: 0
    }
  },
  {
    coordinates: [33.216702,-117.40004],
    city: {
      name: "Camp Pendleton",
      population: 10716
    },
    accident: {
      name: "Camp Pendleton",
      population: 0
    }
  },
  {
    coordinates: [33.382061,-117.25135],
    city: {
      name: "Falbrook",
      population: 31771
    },
    accident: {
      name: "Falbrook",
      population: 0
    }
  },
  {
    coordinates: [32.644225,-116.781409],
    city: {
      name: "Dulzura",
      population: 896
    },
    accident: {
      name: "Dulzura",
      population: 0
    }
  },
{
    coordinates: [32.852829,-116.615853],
    city: {
      name: "Descanso",
      population: 1287
    },
    accident: {
      name: "Descanso",
      population: 0
    }
  },
  {
    coordinates: [32.807274,-116.86808],
    city: {
      name: "Crest",
      population: 13837
    },
    accident: {
      name: "Crest",
      population: 0
    }
  },
  {
    coordinates: [33.226363,-117.114467],
    city: {
      name: "Hidden Meadows",
      population: 3648
    },
    accident: {
      name: "Hidden Meadows",
      population: 0
    }
  },
  {
    coordinates: [32.823445,-116.833723],
    city: {
      name: "Harbison Canyon	",
      population: 3841
    },
    accident: {
      name: "Harbison Canyon	",
      population: 0
    }
  },
  {
    coordinates: [32.84894,-116.55724],
    city: {
      name: "Guatay",
      population: 331	
    },
    accident: {
      name: "Guatay",
      population: 0
    }
  },
  {
    coordinates: [32.968102,-116.911694],
    city: {
      name: "Fernbrook",
      population: 108154
    },
    accident: {
      name: "Fernbrook",
      population: 0
    }
  },
  {
    coordinates: [32.841991,-117.273018],
    city: {
      name: "La Jolla",
      population: 48228	
    },
    accident: {
      name: "La Jolla",
      population: 0
    }
  },
  {
    coordinates: [33.078597,-116.602315],
    city: {
      name: "Julian",
      population: 1502
    },
    accident: {
      name: "Julian",
      population: 0
    }
  },
  {
    coordinates: [32.716999,-116.876135],
    city: {
      name: "Jamul",
      population: 5640	
    },
    accident: {
      name: "Jamul",
      population: 0
    }
  },
  {
    coordinates: [32.618585,-116.187466],
    city: {
      name: "Jacumba",
      population: 561
    },
    accident: {
      name: "Jacumba",
      population: 0
    }
  },
  {
    coordinates: [32.85041,-116.896001],
    city: {
      name: "Lakeside",
      population: 21488		
    },
    accident: {
      name: "Lakeside",
      population: 0
    }
  },
  {
    coordinates: [33.119456,-117.224244],
    city: {
      name: "Lake San Marcos",
      population: 452
    },
    accident: {
      name: "Lake San Marcos",
      population: 0
    }
  },
{
    coordinates: [32.780883,-117.207813],
    city: {
      name: "Lake Morena",
      population: 609	
    },
    accident: {
      name: "Lake Morena",
      population: 0
    }
  },
  {
    coordinates: [32.705597,-117.00045],
    city: {
      name: "La Presa",
      population: 37110
    },
    accident: {
      name: "La Presa",
      population: 0
    }
  },
  {
    coordinates: [33.035378,-116.867513],
    city: {
      name: "Ramona",
      population: 20292		
    },
    accident: {
      name: "Ramona",
      population: 0
    }
  },
  {
    coordinates: [32.604782,-116.613073],
    city: {
      name: "Potrero",
      population: 453
    },
    accident: {
      name: "Potrero",
      population: 0
    }
  },
{
    coordinates: [32.841744,-116.515048],
    city: {
      name: "Pine Valley",
      population: 1912	
    },
    accident: {
      name: "Pine Valley",
      population: 0
    }
  },
  {
    coordinates: [32.872273,-116.41835],
    city: {
      name: "Mount Laguna",
      population: 13
    },
    accident: {
      name: "Mount Laguna",
      population: 0
    }
  },	
  {
    coordinates: [33.10921,-116.673076],
    city: {
      name: "Santa Ysabel",
      population: 1268		
    },
    accident: {
      name: "Santa Ysabel",
      population: 0
    }
  },
  {
    coordinates: [33.024195,-117.198152],
    city: {
      name: "Santa Fe",
      population: 2763
    },
    accident: {
      name: "Santa Fe",
      population: 0
    }
  },
{
    coordinates: [32.76105,-116.918283],
    city: {
      name: "Rancho",
      population: 22018	
    },
    accident: {
      name: "Rancho",
      population: 0
    }
  },
  {
    coordinates: [33.21004,-116.516684],
    city: {
      name: "Ranchita",
      population: 510
    },
    accident: {
      name: "Ranchita",
      population: 0
    }
  },					
	{
    coordinates: [33.2823,-116.6336],
    city: {
      name: "Warner Springs",
      population: 1503
    },
    accident: {
      name: "Warner Springs",
      population: 0
    }
  },
  {
    coordinates: [33.2184,-117.0342],
    city: {
      name: "Valley Center",
      population: 9783
    },
    accident: {
      name: "Valley Center",
      population: 0
    }
  },
  {
    coordinates: [32.57306,-116.62361],
    city: {
      name: "Tecate",
      population: 72860
    },
    accident: {
      name: "Tecate",
      population: 0
    }
  },	
  {
    coordinates: [32.7484,-117.161],
    city: {
      name: "Hillcrest",
      population: 31792
    },
    accident: {
      name: "Hillcrest",
      population: 0
    }
  },
  {
    coordinates: [32.8183,-117.1712],
    city: {
      name: "clairemont",
      population: 35827
    },
    accident: {
      name: "clairemont",
      population: 0
    }
  },
  {
    coordinates: [32.725376,-117.16153],
    city: {
      name: "Downtown",
      population: 5111
    },
    accident: {
      name: "Downtown",
      population: 0
    }
  },		
  {
    coordinates: [32.9595,-117.1153],
    city: {
      name: "Rancho penasquitos",
      population: 54334	
    },
    accident: {
      name: "Rancho penasquitos",
      population: 0
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
      radius: pop[i].city.population/20
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


