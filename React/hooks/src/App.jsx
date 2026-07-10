import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert(count)
    setCount(count+1)
  })
  return (
    <>
    </>
  )
}

export default App
