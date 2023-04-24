const AboutList = (props) => {
    
    return ( 
        <div className="aboutlist">
            <div className="list">
                <h3 className="title--h3">{props.item.title}</h3>
                <p className="desc">{props.item.description}</p>
            </div>
        </div>
    );
}   
 
export default AboutList;  