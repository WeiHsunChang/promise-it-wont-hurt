function parsePromised(json) {
    return new Promise(function (resolve, reject) {
        try {
            resolve(JSON.parse(json))  //this definitely run an error
        }
        catch (err) { // err is an Error object
            reject(err) 
        }
    });
}
parsePromised(process.argv[2])
    .catch((error) => {
        console.log(error.message)
    })