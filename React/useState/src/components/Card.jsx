import React from 'react'
import { useState } from 'react'

const Card = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <div className="card "></div>
            <p className='text-3xl font-bold underline'>{count}</p>
            <button onClick={increase}>Click me</button>
            {/* <button onClick={() => {
                setCount(count + 1)
            }}>Click me</button> */}
        </div>
    )
}

export default Card
