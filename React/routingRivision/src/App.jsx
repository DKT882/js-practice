import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './features/home/Home'
import About from './features/about/About'
import NavBar from './shared/components/NavBar'



function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/*' element={<div>Error 404: PageNot Found Try /about or /home or /</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
