console.log("let's build some charts!")

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar', 'timeline']});

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart1);
//google.charts.setOnLoadCallback(drawChart2);
//google.charts.setOnLoadCallback(drawChartDonate);
google.charts.setOnLoadCallback(drawChartTime);
google.charts.setOnLoadCallback(drawChartBar);


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart1() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Combo', 3],
    ['Meat Lovers', 2],
    ['The Cheezes Christ', 5],
    ['Anchovies', 2],
    ['Veggie', 2]
  ]);

  // Set chart options
  var options = {'title':'What Kinds of Pizza I Ate Last Night',
                 'width':700,
                 'height':500,
                'legend':'left',
                'is3D': 'true'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

function drawChart2() {

  // Create the data table.
//  var data = new google.visualization.DataTable();
//  data.addColumn('string', 'Topping');
//  data.addColumn('number', 'Slices');
//  data.addRows([
//    ['Combo', 3],
//    ['Meat Lovers', 2],
//    ['The Cheezes Christ', 5],
//    ['Anchovies', 2],
//    ['Veggie', 2]
//  ]);
       
  var data = google.visualization.arrayToDataTable([
    ['Toppings', 'Slices'],
    ['Combo', 3],
    ['Meat Lovers', 2],
    ['The Cheezes Christ', 5],
    ['Anchovies', 2],
    ['Veggie', 2]
  ]);
  

  // Set chart options
  var options = {
    chart: {
      title: 'Kinds of Pizza I ate Last Night',
    },
    bars: 'horizontal'
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.charts.Bar(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

function drawChartDonate() {

  // Create the data table.
 var data = google.visualization.arrayToDataTable([
          ['Organization', 'Costs'],
          ['Administrative', 4],
          ['Fundraising',      16],
          ['Youth Programs',  36],
          ['Adult Programs', 44],
        ]);

  
        var options = {
          title: 'Organization Donations',
          width: 800,
          height: 500,
          title: 'My Donations',
          pieHole: 0.4,
          slices: [
           {color: '#8AD1C2'}, 
           {color: '#9F8AD1'}, 
           {color: '#D18A99'}, 
           {color: '#BCD18A'}
          ]
        };

        var chart = new google.visualization.PieChart(document.getElementById('donate-chart'));
        chart.draw(data, options);
}

function drawChartTime() {
  var container = document.getElementById('time-chart');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Phase Of Study' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'General Ed', new Date(2018, 8, 1), new Date(2019, 4, 1) ],
    [ 'Choose Major', new Date(2018, 5, 1),  new Date(2019, 7, 1) ],
    [ '2 Major Class',  new Date(2019, 8, 1),  new Date(2020, 4, 1) ],
    [ '12 Major Class',  new Date(2020, 8, 1),  new Date(2021, 4, 1) ]
  ]);

  chart.draw(dataTable);  
}

function drawChartBar() {
  
}

