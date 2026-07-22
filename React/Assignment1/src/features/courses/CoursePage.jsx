import { useForm } from 'react-hook-form'
import DUMMY_COURSES from '../../data/courses.js'

const CoursePage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitted }
    } = useForm()
    const Submit = (data) => {
        console.log(data.title)
        const finalData = {
            id: DUMMY_COURSES.length,
            title: data.title,
            level: "Beginner",
            duration: data.duration,
            price: !data.price?'free':data.price,
            description: "Learn the fundamentals of React, including components, state, props, hooks, and basic routing. Perfect for developers starting their front-end journey.",
            thumbnail: data.courseUrl?data.courseUrl:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
            instructor: data.instructor
        }
        DUMMY_COURSES.push(finalData)
        reset()
    }
    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 shadow-[0_20px_80px_rgba(15,23,42,0.08)] p-8 backdrop-blur-md sm:p-10">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold text-balck-900 sm:text-4xl">Create a new course</h1>
                </div>
                <form className="grid gap-6" onSubmit={handleSubmit(Submit)}>
                    <div className="grid gap-2">
                        <label className="text-sm font-medium text-white-700">Title</label>
                        <input
                            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                            type="text"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: 'This field is required'
                                }
                            })}
                        />
                        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-white-700">Level</label>
                            <input
                                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                                type="text"
                                {...register("level", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })}
                            />
                            {errors.level && <p style={{ color: 'red' }}>{errors.level.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-white-700">Duration</label>
                            <input
                                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                                type="text"
                                {...register("duration", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })}
                            />
                            {errors.duration && <p style={{ color: 'red' }}>{errors.duration.message}</p>}
                        </div>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-white-700">Price</label>
                            <input
                                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                                type="text"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })}
                            />
                            {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-white-700">Instructor</label>
                            <input
                                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                                type="text"
                                {...register("instructor", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })}
                            />
                            {errors.instructor && <p style={{ color: 'red' }}>{errors.instructor.message}</p>}
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <label className="text-sm font-medium text-white-700">Description</label>
                        <input
                            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                            type="text"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'This field is required'
                                }
                            })}
                        />
                        {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <label className="text-sm font-medium text-white-700">Course Image Url</label>
                        <input
                            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-violet-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                            type="text"
                            {...register("courseUrl")}
                        />
                    </div>
                    <button
                        className="inline-flex items-center justify-center rounded-2xl bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/15 transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
                        type="submit"
                    >
                        Create course
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CoursePage
