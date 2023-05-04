function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Create a new list item with the user's input
    var taskItem = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    taskItem.appendChild(taskText);
  
    // Add a delete button to the list item
    var deleteBtn = document.createElement("button");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    deleteBtn.classList.add("delete-btn");
    taskItem.appendChild(deleteBtn);
  
    // Append the new list item to the task list
    taskList.appendChild(taskItem);
  
    // Clear the input field
    taskInput.value = "";
  
    // Add a click event listener to the delete button
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });
  }
  