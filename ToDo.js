var li = document.querySelector("li");
var ul = document.querySelector("ul");
var input = document.querySelector("input[type='text']");
var plus = document.querySelector(".fa-plus")

// Toggle Item as done after clicking.
ul.addEventListener("click", setCompleted);

function setCompleted(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		e.target.classList.toggle("completed");
	}
}

// remove the todo after hitting trash icon.
ul.addEventListener("click", setDeleted);

function setDeleted(e) {
	if (e.target.tagName.toLowerCase() === 'i') {
		e.target.parentNode.parentNode.classList.add("deleted")
		setTimeout(function(){
			e.target.parentNode.parentNode.remove();
			// e.stopPropagation(); 
		},500);
	}
}

// add new todo to the list upon hitting enter key.
input.addEventListener("keydown", function(){
	if (event.keyCode === 13) {
		var val = this.value;
		if(isInputValid(val) == false) return;
		newItem = document.createElement("li");
		newItem.innerHTML = "<span> <i class='fas fa-trash-alt'></i> </span>" + val;
		ul.appendChild(newItem)
		input.value = "";
	}
});

// Input validator
function isInputValid(input) {
	if(input == "") {
		alert("Input cannot be empty!");
		return false;
	} else {
		return true;
	}
}

// Toggle input field upon clicking plus button.
plus.addEventListener("click", function(){
	input.classList.toggle('deleted')
	setTimeout(function() {
		input.classList.toggle("hideInput")
	}, 400);
})