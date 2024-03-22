namespace SpreadObject {
    class A {
        aname: string = 'A'
    }

    class B {
        bname: string = 'B'
    }

    const a = new A()
    const b = new B()

    const c = {...a, ...b}
    const d = Object.assign(a, b)
    console.log(c)
    console.log(d)

    a.aname = 'A1'
    console.log(c)
    console.log(d)
}

/*
    { aname: 'A', bname: 'B' }
    A { aname: 'A', bname: 'B' }
    { aname: 'A', bname: 'B' }
    A { aname: 'A1', bname: 'B' }
*/