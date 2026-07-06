import { add, subtract } from './mosulw.js';
let employee="rahul"
let empID="12345dsaf"
let depart="IT"
console.log(`Employee ${employee} works in  ${depart} Department.`)


let email='     rahul@company.com     '
console.log(email.trim())


let pdtName='Gaming laptop'
let text='Gaming'
console.log(pdtName.includes(text) )


// async function getData(){
//     let fukk=await fetch('https://fakestoreapi.com/products')
//     let data=await fukk.json()
//     console.log(data)
// }
// getData()

let couponCode='save20'
console.log(couponCode.toUpperCase())



let fileName='resume.pdf'
console.log(fileName.slice(0,6))




let attendlist='Rahul Aman Priya Anjali'
console.log(attendlist.split(' '))



let passcheck="abc12345"
console.log(passcheck.length)
console.log(passcheck.includes('123'))



let resMenu='Paneer Butter Masala'



console.log(add(13,34))
console.log(subtract(13,34))