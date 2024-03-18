interface User {
    name: string;
    age: number;
}

function canDrive(user: User) {
    console.log("User is", user.name)
    if (user.age >= 16) {
        console.log("Is allowed to drive")
    } else {
        console.log("Is not allowed to drive")
    }
}

const tom: User = {
    name: "Tom",
    age: 12
}

canDrive(tom)