document.addEventListener("DOMContentLoaded", () => {
  //shortenings for html elements
  const taskForm = document.getElementById("create-task-form");
  const taskDescInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("list");
  const taskElement = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newTask = document.createElement("li");
    newTask.innerText = taskDescInput.value;
    console.log(newTask.innerText);

    //add li to ul
    const addTaskToUl = (task) => {
      taskElement.appendChild(task);
    };

    addTaskToUl(newTask);

    //clear input
    event.target.reset();
  });
});
