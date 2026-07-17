import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='border-b-3 border-gray-800 p-1'>
      <nav className='flex justify-around items-center'>
        <NavLink to="/"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOimif_3jg6MlTufxU0RCbGflwelk_I8mkIRoc0OUcg&s=10' className='w-15 h-15 rounded-full' /></NavLink>

        <ul className='flex gap-5 font-bold text-[20px]'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/hkjadfsyuiadfsuio'>ErrorPage</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
