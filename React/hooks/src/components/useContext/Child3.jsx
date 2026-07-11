import { useContext } from 'react'
// import {Context} from '../UseContext.jsx'
import {ThemeContext} from '../UseContext.jsx'

function Child3() {
    const {theme,setTheme} = useContext(ThemeContext)
    const handleClick =() => {
        if(theme==='light')
            setTheme('dark')
        else
            setTheme("light")
    }
    return (
        <>
        <h1 style={{color:'black'}}>
            <button onClick={handleClick}>Click me</button>
        </h1>
        </>
    )
    // const user = useContext(Context)
    // return (
    //     <>
    //     <h1 style={{color:'black'}}>
    //         data : {user.name}
    //     </h1>
    //     </>
    // )
}

export default Child3
