import React from "react";
import DUMMY_COURSES from "../../data/courses";

const SingleCourse = () => {
    const course = DUMMY_COURSES.find(
        (course) => course.id === Number(window.location.pathname.slice(1))
    );

    if (!course) {
        return <h1>Course Not Found</h1>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-2 gap-10 border rounded-2xl p-6">
                <div>
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-[400px] object-cover rounded-xl"
                    />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

                        <p className="text-gray-600 mb-6">{course.description}</p>

                        <div className="space-y-4 text-lg">
                            <p>
                                <span className="font-semibold">Instructor:</span>{" "}
                                {course.instructor}
                            </p>

                            <p>
                                <span className="font-semibold">Level:</span> {course.level}
                            </p>

                            <p>
                                <span className="font-semibold">Duration:</span>{" "}
                                {course.duration}
                            </p>

                            <p>
                                <span className="font-semibold">Price:</span> ₹{course.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;