import { Router } from "express";
const router=Router()



const projects = {
    "projects": [
        {
            "id": 1,
            "name": "E-Commerce Platform",
            "description": "Online shopping platform with product and payment management",
            "technologies": ["Node.js", "React", "MongoDB"],
            "status": "Completed",
            "userIds": [1, 2]
        },
        {
            "id": 2,
            "name": "Task Management App",
            "description": "Application for managing personal and team tasks",
            "technologies": ["Node.js", "React", "PostgreSQL"],
            "status": "In Progress",
            "userIds": [2, 3]
        },
        {
            "id": 3,
            "name": "Portfolio Website",
            "description": "Personal portfolio website for showcasing projects",
            "technologies": ["React", "TypeScript", "MongoDB"],
            "status": "Completed",
            "userIds": [1, 4]
        },
        {
            "id": 4,
            "name": "Banking API",
            "description": "Secure REST API for banking and transaction management",
            "technologies": ["Python", "Express.js", "PostgreSQL"],
            "status": "In Progress",
            "userIds": [3, 5]
        },
        {
            "id": 5,
            "name": "Social Media App",
            "description": "Social networking application with posts and messaging",
            "technologies": ["React", "Node.js", "PostgreSQL"],
            "status": "Planning",
            "userIds": [4, 6]
        },
        {
            "id": 6,
            "name": "Inventory Management System",
            "description": "System for tracking products and warehouse inventory",
            "technologies": ["Node.js", "MongoDB", "Docker"],
            "status": "Completed",
            "userIds": [5, 7]
        },
        {
            "id": 7,
            "name": "Cloud File Storage",
            "description": "Cloud-based file upload and storage application",
            "technologies": ["Python", "AWS", "PostgreSQL"],
            "status": "In Progress",
            "userIds": [6, 8]
        },
        {
            "id": 8,
            "name": "Real-Time Chat App",
            "description": "Real-time messaging application using WebSockets",
            "technologies": ["Node.js", "Express.js", "React"],
            "status": "Completed",
            "userIds": [7, 9]
        },
        {
            "id": 9,
            "name": "Analytics Dashboard",
            "description": "Dashboard for visualizing business and user analytics",
            "technologies": ["TypeScript", "React", "PostgreSQL"],
            "status": "In Progress",
            "userIds": [8, 10]
        },
        {
            "id": 10,
            "name": "DevOps Automation Tool",
            "description": "Tool for automating application deployment and infrastructure",
            "technologies": ["Docker", "AWS", "Node.js"],
            "status": "Planning",
            "userIds": [9, 10]
        }
    ]
}



router.get("/projects",(req,res) => {
    res.status(200).json(projects)
})

export default router