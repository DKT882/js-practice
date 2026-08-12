import express from "express";

const app = express();
app.use(express.json());
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
];

app.get("/users", (req, res) => {
    res.status(200).json(users);
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


app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});