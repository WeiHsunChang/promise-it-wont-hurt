var HTTP = require("q-io/http");

HTTP.read('http://localhost:7000')
    .then((ID) =>{
        //console.log('http://localhost:7001/' + ID.toString('utf8'))
        // 用 + 串接可自動將Buffer 轉 String
        return HTTP.read('http://localhost:7001/' + ID)
    })
    .then(JSON.parse)
    .then(console.log)
    .catch(console.error)
