async function delayedResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Completed')
        }, 2000)
    })
}

(async function execAsyncFunction() {
    const result = await delayedResult()
    console.log(result)
})() // Immediately Invoked Function Expression (IIFE)