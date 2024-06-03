// index.js: purpose and description here
// Author: Jacky Ramos <jramos54@ucsc.edu>
// Date: 1 May

// sortUserName - a function that takes user input and sorts the
// letters of their name
function getNameAndSort(){
	const userName = window.prompt("What your name?");
    // split, sort, join array back to a string
  return userName.split('').sort(). join('');
}


// output
const sortedName = getNameAndSort();
console.log(sortedName);

var output = document.createElement("div");
output.classList.add("name-output");

// Create a new div element for your sorted name
var div = document.createElement("div");
div.textContent = "Here's your sorted name: " + sortedName;
div.classList.add("name-output");

// Append the new <div> containing the sorted name to its parent container
output.appendChild(div);

// Insert the parent container with all its child content before an existing element with ID "output"
document.getElementById('output').insertBefore(output, null);






//document.writeln("Here's your sorted name: ", sortedName, "</br>");










