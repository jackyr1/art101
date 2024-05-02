// index.js - purpose and description here
// Author: Jacky Ramos <jramos54@ucsc.edu>
// Date: 1 May

// sortUserName - a function that takes user input and sorts the
// letters of their name
function getNameAndSort(){
	const userName = window.prompt("What your name?");
  return userName.split('').sort(). join('');
}

console.log(getNameAndSort());
document.writeln("Here's your sorted name: ",
    getNameAndSort(), "</br>");









