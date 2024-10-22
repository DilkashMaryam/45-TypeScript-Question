interface item {
    name: string
    price: number
}
// create two objects
const book: item ={
    name: 'IT START WITH US',
    price: 500
}
const stationary: item ={
    name: 'eraser',
    price: 100
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`stationary name: ${stationary.name}, price: $${stationary.price}`)