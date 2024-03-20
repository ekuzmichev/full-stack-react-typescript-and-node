class Speaker {
    private message: string
    constructor(private name: string) { }

    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name")
        }
        return this.message
    }

    set Message(s: string) {
        let tmpMessage = s
        if (!s.includes(this.name)) {
            tmpMessage = this.name + " " + s
        }
        this.message = tmpMessage
    }
}

const speaker: Speaker = new Speaker("john")
speaker.Message = "hello"
console.log(speaker.Message)