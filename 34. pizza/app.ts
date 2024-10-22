//Think of atleast three kinds of your fav pizza. Store these pizza names in a array, and then use 
// a for loop to print the name of each pizza.

let myPizza = ["MalaiBoti Pizza","Cheese Pizza","Tikka Pizza"];
for(let i = 0; i < myPizza.length; i++){
    console.log(myPizza[i]);
}
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//such as I really love pizza!

for(let i = 0; i < myPizza.length; i++){
    console.log(`I really like to eat ${myPizza[i]}`);
}
console.log(`\nI really like to eat pizza. Pizza comes in variety of flavors and toopings, allowing individuals
    to customize it to their liking`)

