import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function HandleClick(){
    setCount(count+1)
  }
  return (
    <>
      <div onClick={HandleClick}>{count}</div>
    </>
  )
}

export default App
