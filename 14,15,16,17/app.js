"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_list = void 0;
let Guest_list = [`Ayman`, `Javeria`, `Muskan`, `Tehreem`];
exports.Guest_list = Guest_list;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected Miss` + Guest_list[i] + `\nWe invited you for dinner tomorrow. \nThank you \n`);
}
let not_attending = `Ayman`;
let new_guest = `Izma`;
Guest_list[0] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected Miss` + Guest_list[i] + `\nWe invited you for dinner tomorrow. \nThank you \n`);
}
console.log(`Miss. ${not_attending} will not coming to dinner tomorrow`);
Guest_list.unshift(`Aiza`, `Mehek`, `Haya`);
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected Miss` + Guest_list[i] + `\nWe invited you for dinner tomorrow. \nThank you \n`);
}
console.log(`\nunfortunately i can not arrange big table , only two person allowed.`);
while (Guest_list.length > 2) {
    let remove_guest = Guest_list.pop();
    console.log(`Sorry Miss.${remove_guest} you are not invited for dinner`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected Miss` + Guest_list[i] + `\nYes you are still invited you for dinner tomorrow. \nThank you \n`);
}
Guest_list.splice(1, 3);
console.log(Guest_list);
