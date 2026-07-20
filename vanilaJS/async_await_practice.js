// q1

console.log('print')
console.log("program started")
console.log("loading...")
console.log("program end")

// q2
console.log('start')
console.log('ends')
setTimeout(() => {
    console.log("Hello after 3 seconds")
}, 3000);

// q3
setTimeout(() => {
    console.log('1st')
}, 1000);
setTimeout(() => {
    console.log('2ns')
}, 2000);
setTimeout(() => {
    console.log('3rd')
}, 3000);


// q4
console.log('before')
setTimeout(() => {
    console.log('hello')
}, 3000);
console.log('after')


// q5
// let sayHello = ((saybye) => {return 'hello'}) => {
//     console.log(sayBye)
// }
// sayHello()

function greet(callback) {
    console.log(callback);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
greet(sayBye);

function calculate(a,b,callback){
    return 
}