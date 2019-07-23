//Javascript Interactivity

// document.write(<noscript>
// 	<style type="text/css">
// 		#canvas1, #canvas2, #canvas3 { 
//             display:none;
//         }
// 	</style>
// </noscript>);

// window.onload = function(){
//     document.getElementsByClassName('noJS').style.display='block';
//    }


// first canvas
let canvas1 = document.createElement("canvas");
canvas1.id = "canvas1";
canvas1.style.width = "100px";
canvas1.style.height = "50px";
canvas1.classList.add("noJS");
let body = document.getElementById("bodyContent");
body.insertBefore(canvas1, body.childNodes[0]);

// second canvas
let canvas2 = document.createElement("canvas");
canvas2.id = "canvas2";
canvas2.style.width = "800px";
canvas2.style.height = "500px";
canvas2.classList.add("noJS");
let caption1 = document.querySelector("#table1 > caption");
caption1.insertBefore(canvas2, caption1.childNodes[0]);

// third canvas
let canvas3 = document.createElement("canvas");
canvas3.id = "canvas3";
canvas3.style.width = "800px";
canvas3.style.height = "500px";
canvas3.classList.add("noJS");
let caption2 = document.querySelector("#table2 > caption");
caption2.insertBefore(canvas3, caption2.childNodes[0]);

// Second Chart
// Charts.js syntax

function BuildChart(labels, dataSets, chartTitle) {
    var ctx = document.getElementById('canvas2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,// Our labels
            datasets: dataSets, // array of json objects 
        },
        options: {
          
        }
    });
    return myChart;
}

var table = document.getElementById('table1');
var subHeaders = []; // first label of my chart

// label 
for (var i = 2; i < table.rows[1].cells.length; i++) {
    subHeaders[i-2] = table.rows[1].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}

// label and value datasets
var dataSets = []; // empty array for the futurechart
for (var i = 2; i < table.rows.length; i++) { // loop through entire table
    var tableRow = table.rows[i];
    var values = [];
    for (var k = 1; k < tableRow.cells.length; k++) { // loop through rows of the table
        if (k == 1) {
            var country = tableRow.cells[k].innerHTML; //countries, second label to the chart
        } else {
            values.push(parseInt(tableRow.cells[k].innerHTML)); // values of the chart
        }
    }
// json object 
    var json = {
        label: country, // Name the series
        data: values, // Our values
        backgroundColor: [ // Specify custom colors
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor:[ //color, // Add custom color borders
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1 // Specify bar border width
    };
    // pushing json objects into an array, datasets

    dataSets.push(json);
}
var chart = BuildChart(subHeaders, dataSets, "Pays"); // execute chart


// Third Chart


function BuildCharttwo(labels, dataSets, chartTitle) {
    var ctx = document.getElementById('canvas3').getContext('2d');
    var myChartz = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,// Our labels
            datasets: dataSetz,
        },
        options: {
          
        }
    });
    return myChartz;
}

var table = document.getElementById('table2');
var headers = [];


for (var i = 2; i < table.rows[0].cells.length; i++) {
    headers[i-2] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}

console.log(headers);


var dataSetz = [];

for (var i = 2; i < table.rows.length; i++) {
    var tableRowz = table.rows[i];
    var valuez = [];
    for (var k = 1; k < tableRowz.cells.length; k++) {
        if (k == 1) {
            var countryz = tableRowz.cells[k].innerHTML;
        } else {
            valuez.push(parseInt(tableRowz.cells[k].innerHTML));
        }
    }

    var jsonz = {
        label: countryz,
        data: valuez, 
        backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
        borderColor:[ //color, // Add custom color borders
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        borderWidth: 1 
    };

    dataSetz.push(jsonz);
}
var chartz = BuildCharttwo(headers, dataSetz, "Pays");