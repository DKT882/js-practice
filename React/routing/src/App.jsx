import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import NavBar from "./components/NavBar"
import Prams from "./components/Prams"
import Courses from './components/Courses'
import Notes from './components/Notes'
import Reports from './components/Reports'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <NavBar></NavBar>
          <Home></Home>
        </div>
    },
    {
      path: '/home',
      element:
        <div>
          <NavBar></NavBar>
          <Home></Home>
        </div>
    },
    {
      path: '/about',
      element: <div>
        <NavBar></NavBar>
        <About></About>
      </div>
    },
    {
      path: '/dashboard',
      element: <div>
        <NavBar></NavBar>
        <Dashboard></Dashboard>
      </div>,
      children: [{
        path: 'courses',
        element: <div>
          <Courses></Courses>
        </div>
      },
      {
        path: 'notes',
        element: <div>
          <Notes></Notes>
        </div>
      },
      {
        path: 'reports',
        element: <div>
          <Reports></Reports>
        </div>
      },
    ]
    },
    {
      path: '/dashboard/:id', // in this after dashboard/ it consider as id and the :id part called as rout parameter
      element: <div>
        <NavBar></NavBar>
        <Prams />
      </div>
    },{
      path:'*',
      element:
      <div>
        <NavBar></NavBar>
        Error 404 : page not found
      </div>
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
