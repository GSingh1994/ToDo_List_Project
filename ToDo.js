// ToDo.js

// Add task to list
function addTask() {
    var li = document.createElement("LI");
    var input = document.getElementById("task-name");
    li.innerHTML = input.value;

    document.getElementById("todo-list").appendChild(li);
    // console.log("Test addTask() function");
}


// Toggle Item as done after clicking.
var ul = document.querySelector("ul");

ul.addEventListener("click", setCompleted);

function setCompleted(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		e.target.classList.toggle("completed");
	}
}
