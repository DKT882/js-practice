import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input,setInput]=useState(0)
  const expensiveTask = (num) => {
    console.log('inside expensiveTask')
      for (let i = 0; i < 1000000000; i++) {}
      return num*num;
  }
  // let doubleValue=expensiveTask(input)
  let doubleValue=useMemo(() =>expensiveTask(input), [input])
  return (
    <>
      <button
      onClick={() => {
          setCount(count+1)
      }}
      >Click me</button>
      <input 
        type="number"
        placeholder='input the number'
        value={input}
        onChange={(e) => {
            setInput(e.target.value)
            console.log(e.target.value)
        }}
      />
      <div>count: {count} </div>
      <div>double: {doubleValue}</div>
    </>
  )
}

export default App
