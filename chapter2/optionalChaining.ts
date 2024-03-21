namespace OptionalChaining {
    interface Wheels {
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheels;
    }

    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels) { }
    }

    const automobile: Automobile | null = new Automobile({
        count: undefined
    })

    console.log("automobile", automobile)
    console.log("wheels", automobile?.wheels)
    console.log("count", automobile?.wheels?.count)
}