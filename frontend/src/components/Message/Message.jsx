import React from "react";
import "./Message.scss";

const Message = (props) => {
    const msg = JSON.parse(props.message);
    const time = new Date(msg.timestamp).toLocaleString();
    let m;
    if (props.id) {
      m = <div className="Message" id={props.id}><span className="time">{time} </span><strong>{msg.userId}: </strong>{msg.body}</div>
    } else {
      m = <div className="Message"><span className="time">{time} </span><strong>{msg.userId}: </strong>{msg.body}</div>
    }
    return m;
}

export default Message;
