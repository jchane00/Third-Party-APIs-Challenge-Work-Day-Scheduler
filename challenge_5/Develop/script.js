
//Create variable for time and date
const timeDate = document.getElementsByClassName("jumbotron")
//Create variable to reference each id
var time1 = $("[id=9]")
var time2 = $("[id=10]")
var time3 = $("[id=11]")
var time4 = $("[id=12]")
var time5 = $("[id=1]")
var time6 = $("[id=2]")
var time7 = $("[id=3]")
var time8 = $("[id=4]")
var time9 = $("[id=5]")

var changeTime = moment({hour:7, minute:00})
var today = new Date(); 
var hour = today.getHours();
console.log(hour)

//Code for Time and Date
$(function() {
    $(timeDate).append(today)
})

//Make the innerhtml of each id a time between hours of 9-5


// //Code to ensure save text when save button is clicked and data persist when page is refreshed
var saveSchedule = function() {
    localStorage.setItem()
}
// //Declare time then iterate over each element by 1 hour
// $(".timeBlock").html =
  
//Function for past,present, and future timeblocks
var element =  ("div:has(textarea)").val
if (element != ) {
    $(this).addClass('past')
}

//Add bootstrap class depending on event time to change color
//Use .on method to gray out time blocks depending on 
$(document).on("click", "past", function() { 
    var text = $(this).text().trim();
}

