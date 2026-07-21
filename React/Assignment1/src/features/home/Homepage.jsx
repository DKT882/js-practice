import React from 'react'
import CourseCard from '../shared/CourseCard'
import DUMMY_COURSES from '../../data/courses'

const Homepage = () => {
    return (
        <>
            <div className="min-h-screen flex justify-center">
                <div className="flex flex-wrap justify-center gap-5 max-w-7xl">
                    {DUMMY_COURSES.map((course) => (
                        <CourseCard
                            key={course.id}
                            courseName={course.title}
                            courseImage={course.thumbnail}
                            instructor={course.instructor}
                            duration={course.duration}
                            level={course.level}
                            description={course.description}
                            id={course.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Homepage
