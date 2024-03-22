const items = [
    { name: 'John', age: 20 },
    { name: 'Linda', age: 22 },
    { name: 'Jonh', age: 40 },
]

const john = items.find((item) => item.name === 'John')

console.log(john)