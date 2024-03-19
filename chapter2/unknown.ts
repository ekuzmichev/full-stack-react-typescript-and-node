let unknownVal: unknown = 22;
unknownVal = "string value"
unknownVal = new Array()
if (unknownVal instanceof Array) {
    unknownVal.push(33)
}
console.log(unknownVal)