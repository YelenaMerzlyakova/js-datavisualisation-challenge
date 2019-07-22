function BuildChart(labels, values, chartTitle) {
    var ctx = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels, // Our labels
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
for (var i = 0; i < table.rows[0].cells.length; i++) {
  headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}
var subHeaders = [];
for (var i = 0; i < table.rows[1].cells.length; i++) {
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
    // console.log(table.rows[1]);
    for (var j = 0; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
  
    for (var k = 0; k < tableRow.cells.length; k++) {
        rowData2[subHeaders[k]] = tableRow.cells[k].innerHTML;
    }
    console.log(subHeaders);
    console.log(rowData2);
    json.push(rowData);
    json2.push(rowData2);
  }
  
  console.log(json);
  console.log(json2);

  //Map JSON values back to label array

    var label1 = json.map(function (e) {
    return e.pays;
  });
  console.log(label1); // ["2016", "2017", "2018", "2019"]

  var label2 = json2.map(function (e) {
    return e.nombre.year;
  });
  console.log(label2); // ["2016", "2017", "2018", "2019"]
  
//   var sublabels = json2.map(function (e) {
//     return e."2002";
//   });
//   console.log(sublabels); // ["2016", "2017", "2018", "2019"]
  
//   // Map JSON values back to values array
//   var values = json.map(function (e) {
//     return e.nombre(enmilliers);
//   });
//   console.log(values); // ["10", "25", "55", "120"]