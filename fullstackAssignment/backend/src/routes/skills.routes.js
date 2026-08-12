import { Router } from "express";
const router=Router()


const skills = {
    "skills": [
        {
            "id": 1,
            "name": "JavaScript",
            "category": "Programming",
            "level": "Advanced"
        },
        {
            "id": 2,
            "name": "Node.js",
            "category": "Backend",
            "level": "Advanced"
        },
        {
            "id": 3,
            "name": "React",
            "category": "Frontend",
            "level": "Intermediate"
        },
        {
            "id": 4,
            "name": "Python",
            "category": "Programming",
            "level": "Advanced"
        },
        {
            "id": 5,
            "name": "MongoDB",
            "category": "Database",
            "level": "Intermediate"
        },
        {
            "id": 6,
            "name": "PostgreSQL",
            "category": "Database",
            "level": "Advanced"
        },
        {
            "id": 7,
            "name": "Express.js",
            "category": "Backend",
            "level": "Intermediate"
        },
        {
            "id": 8,
            "name": "TypeScript",
            "category": "Programming",
            "level": "Advanced"
        },
        {
            "id": 9,
            "name": "Docker",
            "category": "DevOps",
            "level": "Intermediate"
        },
        {
            "id": 10,
            "name": "AWS",
            "category": "Cloud",
            "level": "Advanced"
        }
    ]
}


router.get("/skills",(req,res) => {
    res.status(200).json(skills)
})

export default router