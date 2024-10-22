let Guest_list : string [] = [`Ayman`,`Javeria`,`Muskan`,`Tehreem`];
for (let i=0; i<Guest_list.length; i++){
    console.log(`Respected Miss` + Guest_list[i] + `\nWe invited you for dinner tomorrow. \nThank you \n`)
}
export{Guest_list}

let not_attending : string = `Ayman`;
let new_guest : string = `Izma`;
Guest_list[0] = new_guest;
for (let i=0; i<Guest_list.length; i++){
    console.log(`Respected Miss` + Guest_list[i] + `\nWe invited you for dinner tomorrow. \nThank you \n`)
}
console.log(`Miss. ${not_attending} will not coming to dinner tomorrow`);
Guest_list.unshift(`Aiza`,`Mehek`,`Haya`);
for (let i=0; i<Guest_list.length; i++){
    console.log(`Respected Miss` + Guest_list[i] + `\nWe invited you for dinner tomorrow. \nThank you \n`)
}
console.log(`\nunfortunately i can not arrange big table , only two person allowed.`)
while(Guest_list.length>2){
    let remove_guest = Guest_list.pop();
    console.log(`Sorry Miss.${remove_guest} you are not invited for dinner`);
}
for (let i=0; i<Guest_list.length; i++){
    console.log(`Respected Miss` + Guest_list[i] + `\nYes you are still invited you for dinner tomorrow. \nThank you \n`)
}
Guest_list.splice(1,3)
console.log(Guest_list)