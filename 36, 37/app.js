"use strict";
//36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
//that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: string, message: string){
//     console.log(`Making a ${size} t-shirt with the message "${message} printed on it.`);
// }
// make_shirt("medium","Hello world!")
//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" print on it.`);
}
make_shirt("large", "I love TypeScript");
make_shirt("medium", "I love TypeScript");
make_shirt("small", "Dive into coding!");
