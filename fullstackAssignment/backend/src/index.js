// require('dotenv').config({path: './env'});  // old version
import dotenv from 'dotenv';
import express from "express";
const app = express()
dotenv.config()


const users = {
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "skillIds": [1, 2],
            "projectIds": [1]
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com",
            "skillIds": [2, 3],
            "projectIds": [1, 2]
        },
        {
            "id": 3,
            "name": "Mike Johnson",
            "email": "mike@example.com",
            "skillIds": [1, 3],
            "projectIds": [2, 3]
        }
    ]
}


const skills = {
    "skills": [
        {
            "id": 1,
            "name": "JavaScript",
            "level": "Advanced"
        },
        {
            "id": 2,
            "name": "Node.js",
            "level": "Intermediate"
        },
        {
            "id": 3,
            "name": "React",
            "level": "Advanced"
        }
    ]
}


const projects = {
    "projects": [
        {
            "id": 1,
            "name": "E-Commerce API",
            "description": "REST API for an online shopping platform",
            "technologies": ["Node.js", "Express", "MongoDB"],
            "userIds": [1, 2]
        },
        {
            "id": 2,
            "name": "Task Management App",
            "description": "Application for managing team tasks",
            "technologies": ["React", "Node.js", "MongoDB"],
            "userIds": [2, 3]
        },
        {
            "id": 3,
            "name": "Portfolio Website",
            "description": "Personal portfolio website",
            "technologies": ["React", "JavaScript", "CSS"],
            "userIds": [3]
        }
    ]
}





app.get('/', (req, res) => {
    res.send("Hello")
})
app.get('/users', (req, res) => {
    res.send("users")
})
app.get('/skills', (req, res) => {
    res.send("skills")
})
app.get('/projects', (req, res) => {
    res.send("projects")
})


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})