document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskInput = document.querySelector("#new-task-description");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskDescription = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskDescription;
  const taskList = document.querySelector("#tasks");
  taskList.appendChild(newTask);
  taskInput.value = "";
});

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", function () {
  newTask.remove();
});

newTask.appendChild(deleteButton);


