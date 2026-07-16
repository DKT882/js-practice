import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  useEffect(() => {
    setCount1(count1 + 1)
  }, [count])
  return (
    <>
      <div>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increament</button>
        <p>count: {count} </p>
        <button onClick={() => {
          setCount1(count1 + 1)
        }}>Increament Count2</button>
        <p>count2 : {count1} </p>
      </div>
    </>
  )
}

export default App
