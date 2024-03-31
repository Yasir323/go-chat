import React, { useState, useEffect } from 'react';
import './App.css';
import { connect, sendMessage } from "./api/index";

import Header from "./components/Header/Header.jsx";
import Footer from './components/Footer/Footer.jsx';
import ChatHistory from './components/ChatHistory/ChatHistory.jsx';

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  connect((msg) => {
    setMessages([...messages, msg]);
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage('');
    }
  }

  const handleChange = (e) => setMessage(e.target.value);

  // Scroll to the bottom of the chat messages container
  const scrollToBottom = () => {
    const messagesEndRef = document.getElementById('last-message');
    if (messagesEndRef) {
      messagesEndRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <ChatHistory chatHistory={messages} />
      </div>
      <div className="footer">
        <Footer handleSubmit={handleSubmit} handleChange={handleChange} message={message} />
      </div>
    </div>
  );
}

export default App;
