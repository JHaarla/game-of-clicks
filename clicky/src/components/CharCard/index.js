import React from "react";
import "./CharCard.css";

const CharCard = props => (

    <div className="card">
        <div className="img-container">
            <img className="img-thumbnail img-responsive" alt={props.name} src={props.imglink} onClick={() => props.clickCard(props.id)}/>
        </div>
    </div>
);

export default CharCard;
