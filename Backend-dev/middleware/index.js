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
// const loggingMiddleware= function (req,res,next){
//     console.log(`Incoming request for: ${req.url}`);
//     console.log("it's loggingMiddleware")
//     next()
// }
//loading middleware into application
// app.use(loggingMiddleware)
//creation of the middleware
// const authMiddleware= function (req,res,next){
//     console.log("it's authMiddleware")
//     next()
// }
// app.use(authMiddleware)
//creation of the middleware
// const velidationMiddleware= function (req,res,next){
//     console.log("it's velidationMiddleware")
//     next()
// }
// app.use(velidationMiddleware)


const admin_rout=require('./routes/route.js') // mounting the routes
app.use('/api',admin_rout)
// /api/student
// /api/admin


app.get('/',(req,res) => {
    console.log(req.body)
    res.send('<h1>Hello this is middleware file</h1>')
})
app.listen(port,() => {
    console.log(`the server started on ${3000}`)
})



let items = [{ id: 1, name: 'Learn React' }];

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(${req.method} ${req.url})
    next()
});

app.use((req, res, next) => {
    console.log('Middleware 1');
    next()
});

app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
});

function Ab1(req, res, next) {
    console.log('Middleware for user1');
    next();
}

function Ab2(req, res, next) {
    console.log('Middleware for user2');
    next();
}

app.get('/user1', Ab1, (req, res) => {
    res.json(items);
});

app.get('/user2', Ab2, (req, res) => {
    res.json(items);
});