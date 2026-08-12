import { Router } from "express";
const router=Router()


const users = {
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "skillIds": [1, 2, 5],
            "projectIds": [1, 3]
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com",
            "skillIds": [2, 3, 6],
            "projectIds": [1, 2]
        },
        {
            "id": 3,
            "name": "Mike Johnson",
            "email": "mike@example.com",
            "skillIds": [1, 4, 7],
            "projectIds": [2, 4]
        },
        {
            "id": 4,
            "name": "Emily Davis",
            "email": "emily@example.com",
            "skillIds": [3, 5, 8],
            "projectIds": [3, 5]
        },
        {
            "id": 5,
            "name": "Robert Wilson",
            "email": "robert@example.com",
            "skillIds": [1, 2, 9],
            "projectIds": [4, 6]
        },
        {
            "id": 6,
            "name": "Sarah Brown",
            "email": "sarah@example.com",
            "skillIds": [4, 6, 10],
            "projectIds": [5, 7]
        },
        {
            "id": 7,
            "name": "David Miller",
            "email": "david@example.com",
            "skillIds": [2, 5, 7],
            "projectIds": [6, 8]
        },
        {
            "id": 8,
            "name": "Lisa Anderson",
            "email": "lisa@example.com",
            "skillIds": [3, 6, 8],
            "projectIds": [7, 9]
        },
        {
            "id": 9,
            "name": "James Taylor",
            "email": "james@example.com",
            "skillIds": [1, 7, 9],
            "projectIds": [8, 10]
        },
        {
            "id": 10,
            "name": "Anna Thomas",
            "email": "anna@example.com",
            "skillIds": [4, 5, 10],
            "projectIds": [9, 10]
        }
    ]
}


router.get("/users",(req,res) => {
    res.status(200).json(users)
})

export default router