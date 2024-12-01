import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importing the useLocation hook
import '../styles/FAQ.css';

const FAQ = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { from: 'bot', text: 'Hello! How can I assist you with Yoga today?' },
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat visibility

  const location = useLocation(); // Getting current location (URL path)

  const handleUserInput = (e) => {
    e.preventDefault();

    if (userInput.trim() === '') return;

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { from: 'user', text: userInput },
    ]);

    const predefinedAnswers = {
      'What is yoga?': 'Yoga is a physical, mental, and spiritual practice that originated in India.',
      'What are the benefits of yoga?': 'Yoga helps improve flexibility, strength, posture, and mental clarity.',
      'Can yoga help with weight loss?': 'Yes, yoga can help with weight loss by increasing metabolism and promoting overall fitness.',
      'How often should I practice yoga?': 'It is recommended to practice yoga at least 3-4 times a week.',
      'Is yoga suitable for beginners?': 'Yes, yoga is suitable for beginners. Start with simple poses.',
    };

    const response = predefinedAnswers[userInput] || "Sorry, I don't understand that. Can you ask something else?";

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { from: 'bot', text: response },
    ]);

    setUserInput('');
  };

  return (
    <div className={`faq-container ${isChatOpen ? 'open' : ''}`}>
      {isChatOpen && (
        <div className="chatbox">
          <div className="chat-history">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.from === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <form className="input-form" onSubmit={handleUserInput}>
            <input
              type="text"
              placeholder="Ask me something about Yoga..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      {/* Chatbot Icon */}
      {location.pathname === '/' && ( // Check if the current route is the home page
        <div className="chatbot-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
          <img src="../img/chat.png" alt="Chatbot" /> {/* Replace with your chatbot logo */}
        </div>
      )}
    </div>
  );
};

export default FAQ;
