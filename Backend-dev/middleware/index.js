const express=require('express')
const app=express()

const port=3000


// adding middleware for parsing json 
// loading  middleware (builtin)
app.use(express.json())
// Ignore favicon requests
// Ignore Chrome DevTools automated requests
app.use('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => res.status(204).end());


//creation of the middleware
const loggingMiddleware= function (req,res,next){
    console.log(`Incoming request for: ${req.url}`);
    console.log("it's loggingMiddleware")
    next()
}
//loading middleware into application
app.use(loggingMiddleware)
//creation of the middleware
const authMiddleware= function (req,res,next){
    console.log("it's authMiddleware")
    next()
}
app.use(authMiddleware)
//creation of the middleware
const velidationMiddleware= function (req,res,next){
    console.log("it's velidationMiddleware")
    next()
}
app.use(velidationMiddleware)

app.get('/',(req,res) => {
    console.log(req.body)
    res.send('<h1>Hello this is middleware file</h1>')
})
app.listen(port,() => {
    console.log(`the server started on ${3000}`)
})