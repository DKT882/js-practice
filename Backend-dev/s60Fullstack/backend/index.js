// creatre server only

import express from 'express';
import cors from 'cors'
const app = express()
const PORT = 3000;
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello boy')
})

let users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
];
let students = [
    { id: "st1", name: "DKT" },
    { id: "st2", name: "KY" },
    { id: "st3", name: "JSB" },
];

app.get("/users", (req, res) => {
    res.status(200).json(users);
})
app.get("/students", (req, res) => {
    res.status(200).json(students);
})

app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(newUser);
    res.status(201).json(newUser);
})

app.put("/users/:ids", (req, res) => {
    const id = Number(req.params.ids);
    const user = users.find((u) => u.id === id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.name = req.body.name;
    res.status(200).json(user);
})
app.delete("/users/:ids", (req, res) => {
    const id = Number(req.params.ids);
    users = users.filter((u) => u.id !== id);
    res.status(204).send();
})

app.listen(PORT, () => {
    console.log(`Hello boy this is server http://localhost:${3000}/ `)
})