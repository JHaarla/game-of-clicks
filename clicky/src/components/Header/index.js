import React from "react";
import "./header.css";

const Header = props => (
    <div className="header">
        <div className="title">Clicky Game - React</div>
        <div className="mesg">{props.message}</div>
        <div className="score">Score: {props.score}  |  High Score: {props.highScore}</div> 

    </div>
);

export default Header;