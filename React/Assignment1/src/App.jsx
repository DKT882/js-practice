import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './features/shared/NavBar'
import Homepage from './features/home/Homepage'
import Profile from './features/profile/pages/Profile'

import './App.css'

function App() {

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
