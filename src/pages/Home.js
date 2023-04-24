import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        <div className="home">
            <div className="left">
                <div className='h1'>
                   <h1>Hi <br />
                  <span> Welcome to My World </span></h1>
                </div>
                <div className="social-icons">
                    <Link to="https://www.instagram.com/__kim_miee__/">
                    <FaInstagram  className='ig'/>
                    </Link>
                    <Link to="https://twitter.com/kim__miee">
                    <FaTwitter  className='twitter'/>
                    </Link>
                    <Link to="https://facebook.com">
                    <FaFacebook className='fb'/>
                    </Link>
                    <Link to="https://github.com/Issa-Balikis">
                    <FaGithub className='gh'/>
                    </Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, fugiat suscipit veniam sapiente incidunt dolorum obcaecati placeat voluptatibus quia libero at hic molestias deleniti! Minima earum adipisci eligendi et vel.</p>
                <div className="btnn">
                <Link to="/contact">    
                <button>Contact us</button>
                </Link>
                </div>
            </div>
        </div>
     );
}
export default Home;