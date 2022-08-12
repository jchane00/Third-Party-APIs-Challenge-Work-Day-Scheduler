
// Local Storage (debug)

// let planner_data = (localStorage.getItem("planner_data") !== null) ? JSON.parse(localStorage.getItem("planner_data")) : {"9": "", "10": "", "11": "", "12": "", "1": "", "2": "", "3": "", "4": "", "5": ""}
// var saveSchedule = function(planner_data) {
//     localStorage.setItem("planner_data", JSON.stringify(planner_data))
// }

// let textarea = $(this).children("textarea")
//   let button = $(this).children("button")

//   let id = button.parent().prop("id")
//   textarea.val(planner_data[id]) 
//   button.click(function(){
    
//     planner_data[id] = textarea.val()
//     console.log(planner_data)
//     saveSchedule(planner_data)
//   })

// Time and Date variables
var today = new Date();
var hour = today.getHours() % 12 || 12

console.log(hour)
//Time and Date
$(function() {
    $(currentDay).html(today)
})


var addColor = $(".timeblock").each(function(elem) {
 if ((parseInt($(this).prop("id"))  < (hour))){
  $(this).addClass("btn btn-secondary")
 }
  else if 
    ((parseInt($(this).prop("id"))  == (hour))){
             $(this).addClass("btn btn-danger")
  }       
  else {
        $(this).addClass("btn btn-success")
      }
})

    
  
 
 
  
  
