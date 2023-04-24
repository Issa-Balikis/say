import { useState } from "react";
import Address from "../components/address";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
})

    const handleChange = (event) => {
       const  { name, value } = event.target
       setFormData(prevState => {
        return {
            ...prevState,
            [name]: value
        }
       })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }


    return ( 
        <div className="content">
            <div className="contact">
            <div className="card">
            <h2>Get in Touch</h2>
            <div className="forms">
                <form onSubmit={handleSubmit}>
                <h3>SEND US A NOTE</h3>
                    <input type="text"
                           placeholder="Name"
                           name="name"
                           onChange={handleChange}
                           value={formData.name}
                            />
                    <input type="email" 
                           placeholder="Email"
                           name="email"
                           onChange={handleChange}
                           value={formData.email}

                           />
                    <textarea type="text"
                              placeholder="Tell us more about your needs..."
                              name="message"
                              onChange={handleChange}
                              value={formData.message}
                          /> 
                   <div className="btnn">            
                   <button className="button">Send Message</button>  
                   </div>      
                </form>
                </div>
            </div>
        </div>
          <div className="added">
            <Address />
            </div> 
        </div>
    );
}
 
export default Contact;