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


  //  eg:2
  /*
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
    */




  // eg:3
  const [count,setCount]=useState(0)
  let time=useRef(null)
  function Start(){
    time.current=setInterval(() => {
      setCount(count=>count+1)
    }, 1000);
  }
  function Stop(){
    clearInterval(time.current)
    setCount(time.current)
    time.current=null;
  }
  function Reset(){
    Stop()
    setCount(0)
  }
  return (
    <div>
      <h1>Stop Watch timming: {count}s</h1>
      <br />
      <br />
      <button onClick={Start}>Start</button>
      <br />
      <br />
      <button onClick={Stop}>Stop</button>
      <br />
      <br />
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App
