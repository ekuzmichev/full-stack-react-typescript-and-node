function getEmployee(id) {
    return {
        name: "John",
        age: 35,
        address: '123 St',
        country: 'Russia'
    }
}

const { name: fullName, age } = getEmployee(22)
console.log('employee', fullName, age)

function getEmployeeWorkingInfo(id) {
    return [
        id,
        'Office St',
        'France'
    ]
}

const [id, officeAddress] = getEmployeeWorkingInfo(22)
console.log('work info', id, officeAddress)