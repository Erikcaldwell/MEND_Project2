
function buildSampleData(driver) {
    d3.json(`/api/location`).then((data) => {
        var PANEL = d3.select("#bumpiness-data");
        PANEL.html("");
        results = data.result
        if (driver == 'All') {
            filtered_data = results
            
        }
        else {
            filtered_data = results.filter(d => d.Driver == driver)
         }
        
        Object.entries(filtered_data[0]).forEach(([key, value]) => {
            if(!(key == 'Driver' && driver == 'All')) {
            PANEL.append("h6").text(`${key}: ${value}`)};
        })
    });
    }
buildSampleData('All')

d3.select("#selDataset").on("change", function(){
    var driver = d3.select(this).node().value
    console.log(driver)
    buildSampleData(driver)
})

  
d3.json(`/api/location`).then(function(data) {
    results = data.result
    // build a pie chart
    var Zhisen = results.filter(d => d.Driver == "Zhisen"
    );
    var Erik = results.filter(d => d.Driver == "Erik"
);
    var Naazneen= results.filter(d => d.Driver == "Naazneen"
);
    var Daniel = results.filter(d => d.Driver == "Daniel"
);
    var values = [Zhisen.length, Erik.length, Naazneen.length, Daniel.length]
    var pieData = [
    {
        values: values,
        labels: ['Zhisen(Marina)', 'Erik', 'Naazneen', 'Daniel'],
        // hovertext: ['Marina', 'Erik', 'Naazneen', 'Daniel'],
        // hoverinfo: "hovertext",
        type: "pie"
    }
    ];

    var pieLayout = {
        title: "Proportion of Bumpy Roads for Each Driver",
        legend: {
            x: 1,
            y: 1
        }
    };

    Plotly.plot("pie", pieData, pieLayout); 
    
    var longitude = [];
    var latitude = [];
    var g_force = [];
    var driver = [];
    results.forEach(d => {
        longitude.push(d.Longitude)
        latitude.push(d.Latitude)
        g_force.push(d.G)
        driver.push(d.Driver)
    })


// Build a histogram
    var hist_trace = {
        x: g_force,
        type: 'histogram',
    };
    var histLayout = {
        title: "Frequence of G Force",
        xaxis: {title: 'G force'},
        yaxis: {title: 'Frequency'}
    }
    Plotly.plot("hist", [hist_trace], histLayout)

// Build a Bubble Chart
    
    var bubbleLayout = {
        title: "Bumpiness of Road in San Diego",
        hovermode: "closest",
        xaxis: {title: "Latitude" },
        yaxis: {title:'Longitude'}
    }
    var g_force_text = g_force.map(g => `G Force: ${g}`)
    var bubbleData = [
        {
        x: latitude,
        y: longitude,
        text: g_force_text,
        mode: "markers",
        marker: {
            size: g_force * 600,
            color: 'purple',
            colorscale: "Earth"
        }
        }
    ];

    Plotly.plot("bubble", bubbleData, bubbleLayout);

});

