import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
    courseName,
    courseImage,
    instructor,
    duration,
    level,
    description,
    id
}) => {
    return (
        <div className="w-80 h-[520px] border rounded-xl overflow-hidden">
            <img
                src={courseImage}
                alt={courseName}
                className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col h-[328px]">
                <h2 className="text-xl font-semibold mb-2">
                    {courseName}
                </h2>

                <p className="text-sm mb-3 flex-1 overflow-hidden">
                    {description}
                </p>

                <p className="text-sm mb-2">
                    <strong>Instructor:</strong> {instructor}
                </p>

                <p className="text-sm mb-2">
                    <strong>Duration:</strong> {duration}
                </p>

                <p className="text-sm mb-4">
                    <strong>Level:</strong> {level}
                </p>

                <Link
                    to={`/${id}`}
                    className="border rounded-lg px-4 py-2 text-center"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;