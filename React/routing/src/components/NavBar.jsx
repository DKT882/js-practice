import { Link,NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <div className="Navbar">
            <ul>
                {/* also we can use Navlink insted of links-> in NavLink we have a by default flag named active-link. but in Link we don't have any kind of active class */}

                <li><NavLink to='/' className={({isActive})=>isActive?'isActive':''}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive})=>isActive?'isActive':''}>About</NavLink></li>
                <li><NavLink to='/dashboard' className={({isActive})=>isActive?'isActive':''}>Dashboard</NavLink></li>


                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li> */}
            </ul>
        </div>
    )
}

export default NavBar
