import { add, subtract } from './module.js';
let employee="rahul"
let empID="12345dsaf"
let depart="IT"
console.log(`Employee ${employee} works in  ${depart} Department.`)


let email='     rahul@company.com     '
console.log(email.trim())


let pdtName='Gaming laptop'
let text='Gaming'
console.log(pdtName.includes(text) )



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