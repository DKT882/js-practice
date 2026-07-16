function NavBar() {
    return (
        <nav className="border-b border-slate-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                <a href="#" className="text-lg font-semibold text-slate-900">
                    MySite
                </a>

                <div className="flex items-center gap-4 text-sm text-slate-600">
                    <a href="#" className="hover:text-blue-600">
                        Home
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        About
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
