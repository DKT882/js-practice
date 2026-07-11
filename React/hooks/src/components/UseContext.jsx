import { createContext, useState } from 'react'
import Child1 from './useContext/Child1';

// step 1: create context
// step 2: wrap all the child in provider
// step 3: pass value
// step 4: consum inside the consumer file
const Context = createContext()

function UseContext() {
    const [userData, setUserData] = useState({name:'dkt'});
    return (
        <>
            <Context.Provider value={userData}>
                <Child1></Child1>
            </Context.Provider>
        </>
    )
}

export default UseContext
export {Context}