function toggle() {
  let element = document.body;
  element.classList.toggle('dark-mode1');
}

const inputBox = document.getElementById('inputbox');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === "") {
    alert("You need to Input a Value");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // Create an edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      inputBox.value = li.textContent.trim(); // Set input value to current task text
      li.remove(); // Remove the task temporarily for editing
    };

    // Append edit button to the task
    li.appendChild(editButton);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
};

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
