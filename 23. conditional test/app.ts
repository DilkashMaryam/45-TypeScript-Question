let car: string = 'subaru';

//Test 1: Equality Comparision (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True
//Test 2:
const num1 = 10;
console.log("Is num 1 greater than 5?");
console.log(num1 > 5); // True
//Test 3
const arr1 = [1, 2, 3, 4, 5];
console.log("Does the array have at least 3 elements?", arr1.length >= 3);
//Test 4
const boolVar1 = true;
console.log("Is the boolean variable true?", boolVar1 === true);
// Test 5
const value1 = "Hello";
console.log("Is the variable defined?", value1 !== null && value1 !== undefined);

//Test 1: Equality Comparision (False)
const num2 = 5;
console.log("Is the number negative?", num2 < 0);
// Test 2
const array = [];
console.log("Test 3: Does the array have elements?");
console.log(array.length > 0);
//Test 3
const boolVar2 = false;
console.log("Is the boolean variable true?", boolVar2 === false);
//Test 4
const string = "name";
console.log("Is the string empty?");
console.log(string.length === 0);
//Test 5
const object = { name: "Jane", city: "New York" };
console.log("Does the object have the 'age' property?");
console.log('age' in object);

//Test 2: Stirct equality comparision (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //True