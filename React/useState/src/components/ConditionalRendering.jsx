import React from 'react'
import { useState } from 'react'

function ConditionalRendering() {
    const [isLoggedIn, setLoggined] = useState(true)
    // method 1
    /*
    if (isLoggedIn) {
        return (
            <>
                <button>Logout</button>
            </>
        )
    } else {
        return (
            <>
                <button onclick={() => {
                    setLoggined(false)
                }}>Login Now</button>
            </>
        )
    }
    */

    // method 2
    /*
        return (
            <div>
                {isLoggedIn?<button>Login out</button>:<button>Login</button>}
            </div>
        )
            */

    // method 3
    return (
        <>
        {isLoggedIn&&<button>Log out</button>}
        {!isLoggedIn&&<button>Login </button>}
        </>
    )

}

export default ConditionalRendering
