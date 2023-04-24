import { useEffect, useState } from "react";
import AboutList from "../components/aboutlist";
import data from "../data";

const About = () => {

    const aboutlist = data.map(item => {
        return(
              <AboutList key={item.id}
                        item={item}                               
                        />
        )
    })
    
    return ( 
        <div className="about">
        <div className="container">
           <div className="about--title">
              <h1>About Me</h1>
           </div>
           <div className="flex">
              <div className="about--img">
              <img src="./images/kim.jpeg" alt="" />
              </div>
              <div className="right">
              <div className="abt--p"> 
                 <p>I am Issa Balikis, an aspiring web developer. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero velit ratione nemo, quisquam, nesciunt quae, explicabo doloremque quia rerum architecto expedita molestiae minus non adipisci. Earum labore ducimus at. Let's have fun.</p>
              <div className="btnn">
              <button>Download CV</button>
              </div>
              </div>
           </div>
           </div>
           </div>
           <div className="sub-title">
               <h2>What I Do?</h2> 
           </div>
           <div className="branding">
             {aboutlist}
        </div>
        </div>
    );
}
 
export default About;