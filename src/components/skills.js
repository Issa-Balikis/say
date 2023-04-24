const Skills = () => {
    const Progress = ({ done, title }) => {
        return(
            <div className="progress">
            <div className="progress-done" 
                style={{ opacity: 1, width:`${done}%` }} >
                <h5>{title}</h5>
                <h5>{done}%</h5>
            </div>
            </div>
        )
    }
    return ( 
        <div className="skills">
            <div className="heading">
                <h3>Why You Should Choose Us</h3>
                <h2>My Skills</h2>
            </div>
            <div className="done">
                <Progress  done="80" title="HTML"/>
                <Progress  done="85" title="CSS"/>
                <Progress  done="50" title="JAVASCRIPT"/>
                <Progress  done="50" title="REACT"/>
            </div>
        </div>
     );
}
 
export default Skills;