// index.js - purpose and description here
// Author: Jacky Ramos <jramos54@ucsc.edu>
// Date: 7 May



// Using jQuery to select the element by its ID and set the HTML content
$("#outputt").html('Original array: ')



// add button to challenge, problems, and reflection section
$("#challenge").append("<button class= 'buttonC' id='button-challenge'>Make Special</button>");
$("#problems").append("<button class= 'buttonC' id='button-problems'>Make Special</button>");
$("#reflection").append("<button class= 'buttonC' id='button-reflection'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
 
$("button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

$("button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});
