// index.js - purpose and description here
// Author: Jacky Ramos <jramos54@ucsc.edu>
// Date: 4 May

function addIt(x){
    return (x + 2);
}

// test function
console.log("What is 1 + 2?", addIt(1));
console.log("What is 4 + 2?", addIt(4));

// array numbers
var numArray = [1, 2, 3, 4, 5];
console.log("My array:", numArray);

var result = numArray.map(addIt);
// should return added numbers to array
console.log("2 added to array:", result);

var subtractResult = numArray.map(function(x){
    return (10 - x);
})
// should return results of the array subtracting from 10
console.log("Subtracting from 10 with the array:", subtractResult);

var mapResults = numArray.map(addIt);
console.log("Results: ", mapResults)
