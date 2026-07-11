import { useContext } from 'react'
import {Context} from '../UseContext.jsx'

function Child3() {
    const user = useContext(Context)
    return (
        <>
        <h1 style={{color:'black'}}>
            data : {user.name}
        </h1>
        </>
    )
}

export default Child3
