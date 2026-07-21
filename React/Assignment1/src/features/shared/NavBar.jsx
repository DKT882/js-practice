import { NavLink } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-gray-800 justify-around items-center mb-7'>
      <div className="navImage py-2">
        <NavLink to='/'>
        <img src="https://avatars.githubusercontent.com/u/107047333?v=4" alt="ProfileImage" className='h-11 rounded-full'/>
        </NavLink>
      </div>
      <ul className='flex gap-25  text-2xl'>
        <li className='hover:text-green-600 transition-all duration-300 ease-in-out'><NavLink to='/'>Home</NavLink></li>
        <li className='hover:text-green-600 transition-all duration-300 ease-in-out'><NavLink to='/course'>Courses</NavLink></li>
        <li className='hover:text-red-600 transition-all duration-300 ease-in-out'><NavLink to='/profile'>Profile</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
