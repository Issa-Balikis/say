import { FaPhoneAlt } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Address = () => {
    return (
    <div className="address">
        <h5>Address</h5>
        <div className="icon">
        <label htmlFor="">Alagbado, Lagos state</label>
        </div>
        <div className="icon">
            <FaPhoneAlt className="color" />
         <label htmlFor="">+2348185806242</label>   
        </div>
        <div className="icon" >
             <AiOutlineMail  className="color"/>
          <label htmlFor="/">issabalikis@gmail.com</label>   
        </div>
        <h6>FOLLOW ME</h6>
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
        <p>Copyright &copy; 2023 Issa Balikis. All Rights Reserved </p>
        <div className="terms">
        <div>Terms & Policy</div>
        <div>Disclaimer</div>
        </div>
     </div>
    );
}
 
export default Address;