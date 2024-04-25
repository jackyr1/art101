// index.js - purpose and description here
// Author: Jacky Ramos <jramos54@ucsc.edu>
// Date: 25 April

// define variables
myTransport = ["Mustang", " bus", " rides from friends."];

// create an object for main ride
myMainRide = {
  make: "Ford",
  model: "Mustang",
  color: "Blue",
  year: 2011,
  // method
  age: function(){
    return 2024 - this.year;
  }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</b>");
// object to document
document.writeln("My Main Ride: <pre>", 
JSON.stringify(myMainRide, null, '\t'), "</pre>");

