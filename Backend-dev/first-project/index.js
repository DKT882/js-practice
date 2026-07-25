const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


// app.get('/',(req,res) => {
//     // res.send('this is get request')
//     res.sendFile('./dummyHtmlFile.html',
//         {root:__dirname}
//     )
// })
// app.get("/json",(req,res) => {
//     res.json({"x":1,"y":2,"z":3
//     })
// })
// app.post('/items',(req,res) => {
//     res.send('this is post request')
// })
// app.put('/items/:id',(req,res) => {
//     res.send('this is put request')
// })
// app.delete('/items/:id',(req,res) => {
//     res.send('this is delete request')
// })

const item=require('./routes/items.js')
app.use('/api',item)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});