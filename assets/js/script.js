//Assign button element object rep to var in file
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

 // Adding new text to Task List using DOM > JS

 var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl)};

  buttonEl.addEventListener("click", createTaskHandler);


  // 
