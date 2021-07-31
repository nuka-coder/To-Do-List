// when Submit button is clicked append new li item to ul containing form input value

//declare variable for input value (the task entry)
var input = document.getElementById("task");
//declare variable for empty ul element
var list = document.getElementById("list");
// declare variable for submit button
var submitBtn = document.getElementById("btn");
//declare variable for form
var form = document.getElementById("form");


//create eventListener for when form is submitted (note: button must have type="submit" for this)
form.addEventListener("submit", submitPushed);

//create function to run when eventListener is triggered
function submitPushed(event) {
//create if statement to prevent submission of empty field
if (input.value === "" || input.value === null) {
    alert("Don't leave text field empty.");
}
//if field is not empty
else {
  //create new li element
  var listItem = document.createElement("LI");
//change innerHTML of li element to the value of input
listItem.innerHTML=document.getElementById("task").value;
//append listItem above to ul
list.appendChild(listItem);
//clear input field after appending list element
input.value="";
//prevent default event (the default event for a form submission is to refresh the page)
event.preventDefault();
}
}


//declare variable for reset button
var reset = document.getElementById("reset");
//add eventListener to reset button
reset.addEventListener("click", resetAll);
//create function resetAll
function resetAll() {
  list.innerHTML="";
}



  //assign listItem innerHTML of input





































// //defining initialization for submit button
// var submit = document.getElementById("btn");
//
// //testing submit
// //submit.style.backgroundColor="lime";
//
// //adding click eventListener for submit button
// // submit.addEventListener("click", buttonPushed);
//
// //defining the function attached to the eventListener
// function buttonPushed() {
//   var taskEntry = document.getElementById(".taskItem");
//
//   // taskEntry.innerHTML+="testing function";
// }
//
//
// //declare variable for form id
// // var form = document.getElementById("form");
// // //create eventListener for click of submit button
// // submit.addEventListener("onclick", submitBtn);
// // //create function of submit
// // function sumbitBtn() {
// //   form.submit();
// // }
