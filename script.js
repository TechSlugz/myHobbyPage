// JavaScript boilerplate for my ethical hacking website

// Function to execute when the page is loaded
function main() {
  // Code goes here

  

  const getCurrentTimeDate = () => {

//Code from Step#1 to Step#10 will be here
    let currentTimeDate = new Date();

  var weekday = new Array(7);
        weekday[0] = "SUN";
        weekday[1] = "MON";
        weekday[2] = "TUE";
        weekday[3] = "WED";
        weekday[4] = "THU";
        weekday[5] = "FRI";
        weekday[6] = "SAT";

  var month = new Array();
        month[0] = "JAN";
        month[1] = "FEB";
        month[2] = "MAR";
        month[3] = "APR";
        month[4] = "May";
        month[5] = "JUN";
        month[6] = "JUL";
        month[7] = "AUG";
        month[8] = "SEP";
        month[9] = "OCT";
        month[10] = "NOV";
        month[11] = "DEC";

  var currentDay = weekday[currentTimeDate.getDay()];

  var currentDate = currentTimeDate.getDate();
  
  var currentMonth = month[currentTimeDate.getMonth()];

  var CurrentYear = currentTimeDate.getFullYear();

  var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;

  document.getElementById("day").innerHTML = currentDay;

  document.getElementById("date").innerHTML = fullDate;

  setTimeout(getCurrentTimeDate, 500);

  }
  
  getCurrentTimeDate();













  function Time() {

// Creating object of the Date class
var date = new Date();

// Get current hour
var hour = date.getHours();
// Get current minute
var minute = date.getMinutes();
// Get current second
var second = date.getSeconds();

// Variable to store AM / PM
var period = "";

// Assigning AM / PM according to the current hour
if (hour >= 12) {
period = "PM";
} else {
period = "AM";
}

// Converting the hour in 12-hour format
if (hour == 0) {
hour = 12;
} else {
if (hour > 12) {
hour = hour - 12;
}
}

// Updating hour, minute, and second
// if they are less than 10
hour = update(hour);
minute = update(minute);
second = update(second);

// Adding time elements to the div
document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;

// Set Timer to 1 sec (1000 ms)
setTimeout(Time, 1000);
}

// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
if (t < 10)
{
return "0" + t;
} else {
return t;
}
}

Time();
}

// Add an event listener to execute main function when the page is fully loaded
window.addEventListener('load', main);

/* 
Load script as soon as html page is loaded, before any images, videos or css:

document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code goes here
    alert("Hello, world!");
});
*/
