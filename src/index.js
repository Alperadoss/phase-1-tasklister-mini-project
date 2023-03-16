document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //shortenings for html elements
  const taskForm = document.getElementById("create-task-form");
  const taskDescInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("list");
  const taskElement = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newTask = taskDescInput.innerText;
    console.log(newTask);
  });
});
