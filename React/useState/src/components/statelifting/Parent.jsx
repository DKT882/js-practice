import React from 'react'
import { useState } from 'react'
import Child from './Child.jsx'

function Parent() {
    const [name,setName]=useState('')
    const [lname,setLname]=useState('')
    return (
        <div>
            <Child name={name} setName={setName} lname={lname} setLname={setLname} ></Child>
        </div>
    )
}

export default Parent
