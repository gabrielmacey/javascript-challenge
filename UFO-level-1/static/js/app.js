// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(ufoSighting => {
  console.log(ufoSighting);
  // append a table row for each value
  var row = tbody.append("tr");
  // adding UFO objects
  Object.entries(ufoSighting).forEach(([key, value]) => {
    console.log(key, value);
    // append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});
// Create a filter for new data
var filter = d3.select("#filter-btn");
filter.on("click", function() {

  tbody.html("");

  // input element
  var inputElement = d3.select("#datetime");
  // input values
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // Filter Data with datetime equal to input value
  var cleanedData = tableData.filter(occurance => occurance.datetime === inputValue);
  console.log(cleanedData);
  // do the same appending as before but with the filter
  cleanedData.forEach(occurance => {
    console.log(occurance);
    // append a table row for each value
    var row2 = tbody.append("tr");
    // adding UFO objects
    Object.entries(occurance).forEach(([key, value]) => {
      console.log(key, value);
      // append a cell to the row for each value
      var cell2 = row2.append("td");
      cell2.text(value);
    });
  });
});
