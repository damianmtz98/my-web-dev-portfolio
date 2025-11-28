// Select elements from the document
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

// Set the initial value
let value = 0;

// Update the UI
function updateCounter() {
  counterValue.textContent = value;
}

// Event listeners for each button
increaseBtn.addEventListener("click", () => {
  value++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  value--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  value = 0;
  updateCounter();
});

// Initial UI update
updateCounter();