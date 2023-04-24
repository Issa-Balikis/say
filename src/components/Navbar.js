import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [ sidebar, setSidebar ] = useState(false)

    const toggleNavbar = () => {
        setSidebar(prevState => !prevState)
    }

    return (
      <div className="navbar">
        <div className="nav--h1">My Space!</div>
        <div className="nav">
            <ul className={sidebar ? "navlinks-sidebar" : "navlinks"} onClick={toggleNavbar}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
            <div className="btn">
                <div onClick={toggleNavbar}>
                    {sidebar ? <AiOutlineClose /> : <FaBars />}
                </div>
            </div>
    </div>
     );
}
 
export default Navbar;