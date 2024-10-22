"use strict";
//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
let magicians = ["Don", "Rameez", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
//42. Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great 
//to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magician: string[] = ["Don","Rameez","Chris"];
// function make_great(magicians: string[]){
//     for(let i = 0; i < magicians.length; i++){
//         magicians[i] = magicians[i] + " The Great";
//     }
// }
make_great(magicians);
show_magicians(magicians);
//43. Unchanged Magicians: Start with your work from Exercise 42. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.
let magician = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} The Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magician.slice());
console.log("Original Magician:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians);
