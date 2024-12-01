import React, { useState } from 'react';
import '../styles/Home.css'; // Main page styles
// Chatbot specific styles

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { from: 'bot', text: 'Hello! How can I assist you with Yoga today?' },
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    <div>
      {/* Main Content - Fullscreen Video Section */}
      <div className="video-section">
        <video className="yoga-video" autoPlay loop muted>
          <source src="https://media.istockphoto.com/id/1340708633/video/4k-video-footage-of-an-unrecognizable-woman-meditating-in-the-lotus-position-at-home.mp4?s=mp4-640x640-is&k=20&c=T86m8QZPcAu9--2WzSKm_W-BeWXUcMdlWkoy7t0yKOw=" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Embrace the Art of Yoga</h1>
          <p>Find peace, balance, and strength in every breath.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <img src="https://via.placeholder.com/300" alt="Yoga Tips" />
          <h4>Yoga Tips</h4>
          <p>Learn effective yoga techniques for beginners.</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300" alt="Daily Routines" />
          <h4>Daily Routines</h4>
          <p>Incorporate yoga into your daily life for maximum benefits.</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300" alt="Healthy Eating" />
          <h4>Healthy Eating</h4>
          <p>Explore nutritious diets to complement your yoga practice.</p>
        </div>
      </div>

      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
        <img src="https://thumbs.dreamstime.com/b/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style-robot-icon-chat-bot-sign-support-service-124978456.jpg" alt="Chatbot Icon" />
      </div>

      {/* Chatbox (only visible when isChatOpen is true) */}
      <div className={`chatbox ${isChatOpen ? '' : 'hidden'}`}>
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
    </div>
  );
};

export default Home;
