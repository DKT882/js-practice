import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();// use to navigate b/w two pages
    function handleClick() {
        navigate('/about')
    }
    return (
        <>
            <button onClick={handleClick}>Move to About page using useNavigate hook</button>
            <div>
            HomePage
            </div>
        </>
    )
}

export default Home
