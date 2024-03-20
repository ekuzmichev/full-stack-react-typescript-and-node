class ClassA {
    static typeName: string

    constructor() {}

    static getFullName() {
        return "ClassA " + ClassA.typeName
    }
}

const a = new ClassA()
console.log(ClassA.typeName)

class Runner {
    static lastRunTypeName: string

    constructor(private typeName: string) {}

    run() {
        Runner.lastRunTypeName = this.typeName
    }
}

const runnerA = new Runner("a")
const runnerB = new Runner("b")

runnerB.run()
runnerA.run()

console.log(Runner.lastRunTypeName)