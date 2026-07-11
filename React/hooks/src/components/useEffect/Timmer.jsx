import {useEffect, useState } from 'react'

function Timmer() {
    const [seconds,setSeconds]=useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("set interval runs")
            setSeconds(seconds+1)
            // setSeconds(prevSecond=>prevSecond+1)  // ---> line no. 8 and 9 both are exactly same
        }, 1000);
        return () => {
            console.log('Time to stop')
            clearInterval(interval)
        }
    },[])
    return (
        <div>
            <h1 style={{color:'black'}} >Seconds : {seconds}</h1>
        </div>
    )
}

export default Timmer
