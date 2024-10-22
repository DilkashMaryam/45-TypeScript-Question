"use strict";
//Add an if test to Exercise 30 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
let user_name = ["Ali", "Sara", "Admin", "Saqib", "Usama"];
if (user_name.length === 0) {
    console.log("We need to find some users!");
}
//Remove all of the usernames from your array, and make sure the correct message is printed.
else {
    user_name = [];
    console.log("All users have been removed " + user_name.length);
}
