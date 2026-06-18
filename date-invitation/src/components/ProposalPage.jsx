import React, { useState, useEffect } from "react";
import "./ProposalPage.css";

const ProposalPage = ({ onYes }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  // IProposalPage.jsx
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/romantic-song.mp3");
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    }
    return () => audio.pause();
  }, [isPlaying]);

  // Add a music toggle button
  <button onClick={() => setIsPlaying(!isPlaying)}>
    {isPlaying ? "🔊" : "🔇"}
  </button>;
  const noMessages = [
    "Are you sure? 🥺",
    "Think again! 💝",
    "Please? 🙏",
    "I'll be sad! 😢",
    "You're breaking my heart! 💔",
    "Last chance! 😭",
    "Okay, I'll cry! 😿",
    "You're so mean! 😤",
    "I'll keep asking! 😘",
    "Just say yes! 💕",
  ];

  const handleNoHover = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
    setNoCount((prev) => prev + 1);

    if (noCount >= 8) {
      setShowMessage(true);
    }
  };

  const handleNoClick = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
    setNoCount((prev) => prev + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      const maxX = window.innerWidth - 120;
      const maxY = window.innerHeight - 60;
      setNoButtonPosition((prev) => ({
        x: Math.min(prev.x, maxX),
        y: Math.min(prev.y, maxY),
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="proposal-container">
      <div className="heart-animation">
        <span>💖</span>
        <span>❤️</span>
        <span>💕</span>
      </div>

      <h1 className="proposal-title">Will you go on a date with me? 💝</h1>

      <div className="proposal-buttons">
        <button className="yes-button" onClick={onYes}>
          Yes! 💖
        </button>

        <button
          className="no-button"
          style={{
            position: "fixed",
            left: noButtonPosition.x || "auto",
            top: noButtonPosition.y || "auto",
            transform: noButtonPosition.x ? "none" : "translateX(0)",
          }}
          onMouseEnter={handleNoHover}
          onClick={handleNoClick}
        >
          {showMessage ? noMessages[noCount % noMessages.length] : "No 😢"}
        </button>
      </div>

      {showMessage && (
        <div className="message-bubble">Just say yes! It'll be fun! ✨</div>
      )}
    </div>
  );
};

export default ProposalPage;
