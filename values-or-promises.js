let attachTitle = name => {
    let str = 'DR. '
    return str.concat(name)
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log)
