//Assign button element object rep to var in file
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

 // Adding new text to Task List using DOM > JS

 var createTaskHandler = function(event) {

  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};
   
formEl.addEventListener("submit", createTaskHandler); 


