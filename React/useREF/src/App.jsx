import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  // eg:1 
/*  const [count,setCount]=useState(0)
  const val=useRef(0)

  
  function handleClick(){
    val.current=val.current+1
    console.log('val.current is ',val.current)
    setCount(count+1)
  }
  useEffect(() => {
  console.log('count updated')
  })
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Click me </button>
    </>
  )*/
  
  let btnRef=useRef()
  function changeColor(){
    // console.log(btnRef.current)
    btnRef.current.style.backgroundColor='red'
  }
  return (
    <div>
      <button ref={btnRef} >Thin button color will change with clicking other button</button>
      <button onClick={changeColor}>Click me to change the color</button>
    </div>
  )
}

export default App
