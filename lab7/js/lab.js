// index.js - purpose and description here
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
document.writeln("Here's your sorted name: ", sortedName, "</br>");









