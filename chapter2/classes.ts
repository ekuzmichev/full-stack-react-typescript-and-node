class Human {
    constructor(private readonly msg: string) { }
    speak() {
        console.log(this.msg)
    }
}

const mike = new Human("hello")
mike.speak()