import Skills from "../components/skills";
import workdata from "./workdata";

const Porfolio = () => {
    return ( 
        <div className="porfolio">
            <h1>My Completed Projects</h1>
            <div className="work">
            {workdata.map(item => {
                return(
                <div className="workdetails" key={item.id}>
                  <img src={item.img} alt="" />
                  <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  </div>
               </div>
                )
            })}
            </div>
            <hr />
            <Skills />
        </div>
    );
}
 
export default Porfolio;