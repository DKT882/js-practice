import { useState } from 'react'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import ConditionalRendering from './components/ConditionalRendering.jsx'
import Parent from './components/statelifting/Parent.jsx'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const handleClick=() => {
      setCount(count+1)
  }
  return (
    <>
      <Card />
      <Button increment={handleClick}>
        {count}
      </Button>
      <Parent></Parent>
      <ConditionalRendering></ConditionalRendering>
    </>
  )
}

export default App
