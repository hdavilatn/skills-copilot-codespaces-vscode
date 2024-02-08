//Function to sum thow numbers
function sum(a, b) {
    return a + b;
}

//Export the function
module.exports = sum;

// Path: index.js
//Require the file
var sum = require('./comments.js');
//Call the function
console.log(sum(1, 2)); //3

