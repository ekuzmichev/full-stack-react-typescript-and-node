const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed")
        // reject("Failed")
    }, 3000)
})

myPromise.then(done => console.log("Done:", done)).catch(err => console.log("Catched:", err))