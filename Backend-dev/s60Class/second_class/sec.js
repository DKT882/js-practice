import express from "express";
const app=express();

const PORT=3000

app.get('/',(req,res)=>{
	res.send("this is home page")
})

app.listen(3000,()=>{
	console.log(`server is started on http://localhost:${PORT}/`)
})