let all = (promise1, promise2) =>{
    return new Promise((resolved, rejected) =>{
        let counter = 0
        let result = []
        promise1.then((value) =>{
            result[0] = value
            counter += 1
            if(counter == 2){
                resolved(result)
            }
        })
        promise2.then((value) =>{
            result[1] = value    
            counter += 1
            if(counter == 2){
                resolved(result)
            }
        })
/*      if(counter == 2){  判斷不能放在外面，因為上面是執行非同步，這段會在promise1和promise2執行完前被執行掉
            resolved(result)
        } */
    })
}

all(getPromise1(), getPromise2())
  .then(console.log);