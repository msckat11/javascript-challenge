// Assign variable to data from data.js
var tableData = data;

// // Define title case function
// function titleCase(str) {
//     // convert string to lowercase
//     str = str.toLowerCase();
//     str = str.split(" ");
//     for (var i = 0; i < str.length; i++)
// }


// Read in the data and create the table
// Select the tbody and assign a variable
var tbody = d3.select("tbody");
// Append new row for each ufo object (creating new trs)
tableData.forEach(function (ufoSighting) {
    // console.log(ufoSighting)
    var row = tbody.append("tr");
    var sighting = Object.entries(ufoSighting)
    // console.log(sighting)
    sighting.forEach(function ([key, value]) {
        // for each item in the
        // Append cell for each value to the row 
        var cell = row.append("td");
        cell.text(value);
    });
});


// Event handler - attaching the function to the button
// Select the button in the html and assign a variable
var button = d3.select("#filter-btn");
// Select the form in the html and assign a variable
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Make sure it grabs input date correctly
    console.log(inputValue);
}


// Create a filter function for searching by date


// // 
// button.on("click", function () {
//     console.log(d3.event.target);
// });

// inputField.on("change", function () { }