let rejected = Promise.reject(new Error('Error'))
let resolved = Promise.resolve('Resolved')

resolved.then(console.log)
rejected.catch((error) => {
    console.log(error.message)
})

