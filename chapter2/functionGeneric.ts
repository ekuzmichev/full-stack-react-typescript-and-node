interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(arg: T): number {
    return arg.length
}

console.log(getLength("Hello"))
// console.log(getLength<number>(22)) // Type 'number' does not satisfy the constraint 'HasLength'.