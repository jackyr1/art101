
console.log('Hello from index.js');



function getNameAndDisplay(){
    let name = promt("Name please:");
    $('#title').html('Hello, ' + name);
}


$("#my-button").click(getNameAndDisplay);


