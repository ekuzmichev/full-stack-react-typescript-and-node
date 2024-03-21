class Vehicle {
    constructor(protected wheelCount: number) { }

    showNumberOfWheels() {
        console.log(`Moved ${this.wheelCount} miles`)
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(2)
    }

    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount
    }
}

class Automobile extends Vehicle {
    constructor() {
        super(4)
    }
}

const motorcycle = new Motorcycle()
motorcycle.showNumberOfWheels()
const automobile = new Automobile()
automobile.showNumberOfWheels()