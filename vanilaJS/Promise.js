let promise=new Promise((resolve,reject) => {
    let a=1
    if (a>5){
        resolve('solved')
    }
    else{
        reject('internal server error')
    }
})

promise.then((message) => {
    console.log('The solved ans is  '+message)
}).catch((message) => {
    console.log('Error to solve : '+message)
}).finally(() => {
    console.log('Promise is completed')
})




let promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('first promise solved')
    }, 1000);
})
let promise2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('second promise solved')
    }, 2000);
})
let promise3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise solved')
    }, 4000);
})

Promise.all([promise1,promise2,promise3])
.then((data) => {
    console.log(data)
    return data
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log('this is error of '+error)
})