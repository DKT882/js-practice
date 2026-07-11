import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();// use to navigate b/w two pages
    function handleClick() {
        navigate('/home')
    }
    return (
        <>
            <button onClick={handleClick}>Move to Home page using useNavigate hook</button>
            <div>
                This is about page
            </div>
        </>
    )
}

export default About
