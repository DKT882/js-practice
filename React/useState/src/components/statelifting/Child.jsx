import React from 'react'

function Child({name,setName,lname,setLname}) {
    return (
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <input type="text" onChange={(e)=>setLname(e.target.value)} />
            <p>Hi, I am {name} {lname} </p>  
        </div>
    )
}

export default Child
