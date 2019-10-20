const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

const numbers = [1, 2, 3, 4, 5]

// filter
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log("Log: -----> : filteredItems", filteredItems);

// map
const itemNames = items.map((item) => {
    return item.name
})
console.log("Log: -----> : itemNames", itemNames)


// find
const foundItem = items.find((item) => {
    return item.name === 'Book';
})
console.log("Log: -----> : foundItem", foundItem)


// for each
items.forEach((item) => {
    console.log("Log: -----> : item.name", item.name)
})

// some - on first item found, returns false
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
})
console.log("Log: -----> : hasInexpensiveItems", hasInexpensiveItems)

// every - checks all the items in the array
const hasExpensiveItems = items.every((item) => {
    return item.price <= 1000;
})
console.log("Log: -----> : hasExpensiveItems", hasExpensiveItems)

// reduce
const total = items.reduce((currTotal, item) => {
    return item.price + currTotal;
}, 0)
console.log("Log: -----> : total", total)

// includes
const includesTwo = numbers.includes(2);
console.log("Log: -----> : includesTwo", includesTwo)