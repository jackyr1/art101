// index.js - purpose and description here
// Author: Jacky Ramos <jramos54@ucsc.edu>
// Date: 7 May

$("#output").html("Look what it can do!")

// add button to challenge, problems, reflection, and results section
$(".minor-section").append("<button class= 'buttonC' id='button-pressed'>Cool Button:3</button>");

// add a click listener to the all buttons and toggle special effect
$(".buttonC").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
});
 




