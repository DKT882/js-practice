import { useState } from 'react'
import './App.css'
import ChildCompo from './components/ChildCompo'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const hancleClick = useCallback(() => {
    setCount(count + 1)
  },[count])
  return (
    <>
      <div>count: {count} </div>
      <button onClick={hancleClick}>Increament</button>
      <br />
      <ChildCompo title='Click Me' handleClick={hancleClick} />
    </>
  )
}

export default App
