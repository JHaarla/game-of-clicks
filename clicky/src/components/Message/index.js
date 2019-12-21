import React from "react";
import "./message.css";

const Message = props => (
    <div className="message">
        <div className="mesg">{props.message}</div>

    </div>
);

export default Message;