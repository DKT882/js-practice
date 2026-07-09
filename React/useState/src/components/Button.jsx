import React from 'react'

const Button = ({children,increment}) => {
    return (
        <div>
            <h1>{children}</h1>
            <button onClick={increment}>click me</button>
        </div>
    )
}

export default Button
