import { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        console.log(name,value)
    }

    return (
        <form className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Contact Form</h2>
            <p className="mt-2 text-sm text-slate-600">Fill in the details below.</p>

            <div className="mt-4 space-y-4">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-blue-500"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                        placeholder="you@example.com"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    )
}

export default Form
