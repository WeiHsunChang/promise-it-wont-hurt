let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('TIMED OUT!')
    }, 300)
})

promise.then(console.log)