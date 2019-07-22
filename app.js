let canvas1 = document.createElement("canvas");
let table1 = document.querySelector("#table1 > caption");
table1.insertBefore(canvas1, table1.childNodes[0]);

function BuildChart(labels, values, chartTitle) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,// Our labels
        datasets: [{
          label: chartTitle, // Name the series
          data: values, // Our values
          backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [ // Add custom color borders
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1 // Specify bar border width
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behavior of full-width/height 
      }
    });
    return myChart;
  }

var table = document.getElementById('table1');
var json = []; // First row needs to be headers 
var json2 = [];
var headers =[];
var subHeaders = [];
for (var i = 1; i < table.rows[0].cells.length; i++) {
  headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}

for (var i = 1; i < table.rows[1].cells.length; i++) {
    subHeaders[i] = table.rows[1].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
  }
console.log(headers);
console.log(subHeaders);

for (var i = 1; i < table.rows.length; i++) {
     var tableRow = table.rows[i];
     var tableRow2 = table.rows[i];
     var rowData = {};
     var rowData2 = {};
    // console.log(table.rows[i]);
//     // console.log(table.rows[1]);
     for (var j = 1; j < tableRow.cells.length; j++) {
       rowData[headers[j]] = tableRow.cells[j].innerHTML;
       //console.log(rowData[headers[j]] = tableRow.cells[j].innerHTML);
     }
  
     for (var k = 1; k < tableRow2.cells.length; k++) {
         rowData2[subHeaders[k]] = tableRow2.cells[k].innerHTML;
     }
     console.log(rowData);
     json.push(rowData);
     json2.push(rowData2);
   }
  
   console.log(json);
   console.log(json2);

  //  var myJson = JSON.stringify(json);
  //  console.log(myJson);
  //  7
  //  var data  = [];
  //  for (let i = 0; i < json2.length; i++) {
  //   moves.push(response.data.moves[i].move.name);
  //   pokemonMoves[i].innerHTML = moves[i];
  // }

  //Map JSON values back to label array

      var labelz = json.map(function (e) {
      return e.pays;
    });
   console.log(labelz); // ["2016", "2017", "2018", "2019"]

   var labels = labelz.slice(1,5);

   var valuez = json.map(function (e) {
    return e.undefined;
  });
 console.log(valuez); // ["2016", "2017", "2018", "2019"]

 var values = valuez.slice(1,5);


console.log(labels);



console.log(values);

   //var values = json2[i];
  //  var values = 0;

  //  for(var i = 0; i < json2.length; i++ ) {
    //console.log( json2[i]); //shows eBay, Facebook, etc;
//}


   //var values = json2.map(function (e) {
  //    return e.nombre;
  //   });
  //  console.log(values); // ["2016", "2017", "2018", "2019"]
  
//   var sublabels = json2.map(function (e) {
//     return e."2002";
//   });
//   console.log(sublabels); // ["2016", "2017", "2018", "2019"]
  
//   // Map JSON values back to values array
//   var values = json.map(function (e) {
//     return e.nombre(enmilliers);
//   });
//   console.log(values); // ["10", "25", "55", "120"]
// var chart = BuildChart(labels, values, "Whatever");