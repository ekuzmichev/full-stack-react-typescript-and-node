namespace InterfaceInheritance {
    interface Thing {
        name: string;
        getFullName: () => string
    }

    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor(name: string) {
            this.name = name
        }

        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount
            console.log(`Motorcycle has ${this.wheelCount}`)
        }

        showNumberOfWheels: () => void = () => {
            console.log(`Moved Motorcycle ${this.wheelCount}`)
        }

        getFullName: () => string = () => "MC-" + this.name
    }

    const motorcycle = new Motorcycle("Makaka")
    console.log(motorcycle.getFullName())
}