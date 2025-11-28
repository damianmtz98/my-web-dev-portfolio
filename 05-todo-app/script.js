// Get references to the main elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Helper function: creates a new task element
function createTaskItem(text) {
  // Create the <li> element that will hold the task
  const li = document.createElement("li");
  li.classList.add("task-item");

  // Create a span to show the task text
  const span = document.createElement("span");
  span.textContent = text;

  // When the user clicks the text, toggle "completed"
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // When user clicks delete, remove the entire <li>
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Put span and button inside the <li>
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// Function that reads the input and adds a new task
function addTask() {
  const text = taskInput.value.trim(); // Remove extra spaces

  // If the input is empty, do nothing
  if (text === "") {
    return;
  }

  // Create the task item and append it to the list
  const taskItem = createTaskItem(text);
  taskList.appendChild(taskItem);

  // Clear input after adding
  taskInput.value = "";
  taskInput.focus();
}

// When user clicks the "Add" button
addTaskBtn.addEventListener("click", addTask);

// When user presses Enter inside the input
taskInput.addEventListener("keyup", event => {
  if (event.key === "Enter") {
    addTask();
  }
});