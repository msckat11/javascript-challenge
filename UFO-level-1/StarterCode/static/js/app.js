// from data.js
var tableData = data;

// Put tbody into variable
var tbody = d3.select("tbody");


// Append new row for each ufo object (creating new trs)
tableData.forEach(function (ufoSighting) {
    // console.log(ufoSighting)
    var row = tbody.append("tr");
    // for each item in the 
    Object.entries(ufoSighting).forEach(function[key, value] {
        // Append cell for each value to the row 
        var cell = row.append("td");
        cell.text(value)
    });
});




// // Event handler - attaching the function to the button

// // 
// button.on("click", function () {
//     console.log(d3.event.target);
// });

// inputField.on("change", function () { }