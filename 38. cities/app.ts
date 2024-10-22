//Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. 
//Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.

function describe_city(city: string , country: string= "Pakistan"){
    return `${city} is in "${country}`
}
let city_1 = describe_city("Karachi")
let city_2 = describe_city("Lahore")
let city_3 = describe_city("Multan")
let city_4 = describe_city("Istanbul", "Turkey")

console.log(city_1)
console.log(city_2)
console.log(city_3)
console.log(city_4)
