import { useState, useEffect } from 'react'

function Resize() {
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleSize = () => setWindowsWidth(window.innerWidth)
        window.addEventListener('resize', handleSize)
        return () => {
            window.removeEventListener('resize', handleSize)
            console.log("evenListner removed")
        }
    }, [])
    return (
        <div>
            <h1 style={{color:'black'}}>windows Size: {windowsWidth}px </h1>
        </div>
    )
}

export default Resize
