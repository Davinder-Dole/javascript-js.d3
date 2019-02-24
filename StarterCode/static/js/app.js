// from data.js
var tableData = data;
//data.forEach(x=>{
  //  Object.entries(x).forEach(([key, value]) => console.log(`${key}....${value}`))});


// YOUR CODE HERE!

var tbody=d3.select("tbody");
data.forEach((info) => {
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button=d3.select("#filter-btn");

function buttonclick(){
  d3.event.preventDefault();
  var filter_date=d3.select("#datetime").property("value");
  console.log(filter_date);
  var filter_city=d3.select("#city").property("value");
  console.log(filter_city);
  var filter_state=d3.select("#state").property("value");
  console.log(filter_state);
  var filter_country=d3.select("#country").property("value");
  console.log(filter_country);
  var filter_shape=d3.select("#shape").property("value");
  console.log(filter_shape);
  d3.select("#ufo-table>tbody").remove();
  d3.select("#ufo-table").append("tbody");
  data.filter(function d(rows){
    if((rows.datetime===filter_date) || (rows.city===filter_city)|| (rows.state===filter_state)|| (rows.country===filter_country)|| (rows.shape===filter_shape)){
      console.log(rows);
      tbody=d3.select("#ufo-table>tbody");
      var row = tbody.append("tr");
      Object.entries(rows).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    }
    
  });
 
  
  }
  

  

  

  button.on("click",buttonclick);


