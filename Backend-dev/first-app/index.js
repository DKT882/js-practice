const express=require('express')
const app=express()


// veriable that stores the port
const port=3000;

app.get('/',(req,res) => {
    res.send('the app is started and request sent to the server')
})

// to start the app or server
app.listen(port,() => {
    console.log('app started')
})