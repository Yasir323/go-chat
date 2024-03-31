import React from "react";

import Message from "../Message/Message.jsx";
import "./ChatHistory.scss";

const ChatHistory = ({ chatHistory }) => {
    const messages = chatHistory.map((msg, index) => {
        if (index === chatHistory.length -1) {
            return <Message id="last-message" message={msg.data} />;
        }
        return <Message message={msg.data} />;
    });
    return (
        <div className="chatHistory">
            <h2>Chat History</h2>
            <div className="chat">
                {messages}
            </div>
        </div>
    );
}

export default ChatHistory;
