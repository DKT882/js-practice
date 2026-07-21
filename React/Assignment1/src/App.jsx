import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './features/shared/NavBar'
import Homepage from './features/home/Homepage'
import Profile from './features/profile/pages/Profile'
import DUMMY_COURSES from './data/courses'
import SingleCourse from './features/courses/SingleCourse'

import './App.css'

function App() {
    // console.log(window.location.pathname)

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/home' element={<Homepage></Homepage>}></Route>
          <Route path='/course' element={<Homepage></Homepage>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/*' element={<div>Error 404: PageNot Found Try /about or /home or /</div>}></Route>
          {DUMMY_COURSES.map((course) => {
            return (
              <Route 
                key={course.id} 
                path={`/${course.id}`} 
                element={<SingleCourse />} 
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
