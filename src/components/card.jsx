import React from "react";
import {Link} from 'react-router-dom';

function Card(props){
    return(
        <div className="Cards col-xs-12 col-sm-6 col-md-4">
            
            <h2>{props.name}</h2>
            <p>{props.para}</p>
            <Link className="LinkTags" to={props.link}>Learn More</Link>
            

        </div>
    );
}

export default Card;