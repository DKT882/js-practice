import express from "express";
const app = express();

const PORT = 3000
app.use(express.json());

const students = [
    {
        id: 1, name: "Aarav", course: "Full-Stack Web Dev"
    },
    {
        id: 2, name: "Diya", course: "Full-Stack Web Dev"
    }
]

app.get('/', (req, res) => {
    res.send("this is home page")
})
app.use('/use', (req, res) => {
    res.send("this is use page")
})
app.get("/api", (req, res) => {
    res.status(200).json(students)
})

app.post('/api', (req, res) => {
    const newStuednt = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course,
    }
    students.push(newStuednt)
    res.status(201).json(newStudent);
})


app.put("/api/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    student.name = req.body.name;
    student.course = req.body.course;
    res.status(200).json(student);
});

app.listen(3000, () => {
    console.log(`server is started on http://localhost:${PORT}/`)
})