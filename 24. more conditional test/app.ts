let car: string = 'subaru';
let age: number = 21;
let numbers: number[] = [1, 2, 3, 4];



// *String Tests*

//Test 1: Equality (True)
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == 'subaru'); //True (case-insensitive)

//Test 2: Strict Equality (False)
console.log("Is car === 'subaru' ? I predict false.");
console.log(car === 'subaru'); //False (case-insensititve)

//Test 3: Inequality (True)
console.log("Is car != 'Toyota' ? I predict True.");
console.log(car != 'Toyota'); //True

//Test 4: Inequality (False)
console.log("Is car !== 'subaru' ? I predict False.");
console.log(car !== 'subaru'); //False (case-insensitive)

// *Lower-case Function Tests*

//Test 5: Lower-case converion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); //True (converted to lowercase)

//Test 6: Lower-case conversion (False)
console.log("Is car.toLowerCase() === 'subaru'? I predict False.");
console.log(car === car.toLowerCase()); //False (original value remains uppercase)

// *Numerical Tests*

//Test 7: Equality (True)
console.log("Is age == 21? I predict True");
console.log(age == 21); //True

//Test 8: Inequality (False)
console.log("Is age != 25? I predict True");
console.log(age != 25); //True

//Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); //False

//Test 10: Less than or Equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); //True

//*Logical Operators*

//Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True");
console.log(age > 20 && age < 30); //True (both conditions met)

//Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False");
console.log(age > 30 || age < 18); //False (neither conditions met)

//*Array Tests*

//Test 13: In Array (True)
console.log("Is 3 in numbers? I predict True");
console.log(3 in numbers); //True (checks for index existence)

//Test 14: Not in Array (False)
console.log("Is 5 not in numbers? I predict True");
console.log(5 in numbers); //True (negation of "in" operator)