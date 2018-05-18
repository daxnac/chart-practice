console.log("let's build some charts!")

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

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
                 'height':500};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}