import { useState } from 'react'
import './App.css'
import UserContext from './components/UserContext'

function App() {
  const [count, setCount] = useState(0)
  const user={
    name:'dkt',
    age:20
  }
  return (
    <>
    <UserContext.Provider value={user}>

    </UserContext.Provider>
    </>
  )
}

export default App
