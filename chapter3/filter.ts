namespace Filter {
    const filterItems = [
        { name: 'John', age: 20 },
        { name: 'Linda', age: 22 },
        { name: 'John', age: 40 },
    ]

    const results = filterItems.filter((item, index) => item.name === "John")

    console.log(results)
}