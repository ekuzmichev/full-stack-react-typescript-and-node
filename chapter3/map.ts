namespace MapFunction {
    const employees = [
        { name: "Bob", id: 1 },
        { name: "Rob", id: 2 },
        { name: "Pop", id: 3 },
    ]

    const elements = employees.map((item, index) => `<div>${item.id}-${item.name}</div>`)

    console.log(elements)
}