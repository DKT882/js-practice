import { React, useEffect, useState } from 'react'

function Logger() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Component rendered or count changed : ', count)
    })
    return (
        <div>
            <h1 style={{color:'black'}}>Count : {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increament</button>
        </div>
    )
}

export default Logger
