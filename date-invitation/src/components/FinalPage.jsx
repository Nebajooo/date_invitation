import React from "react";
import "./FinalPage.css";

const FinalPage = ({ dateData }) => {
  // Calculate days left
  const getDaysLeft = () => {
    if (!dateData?.date) return 0;
    const dateObj = new Date(dateData.date);
    const today = new Date();
    const diffTime = dateObj - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysLeft = getDaysLeft();

  // Get time of day message
  const getTimeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning! ☀️";
    if (hour < 17) return "Good Afternoon! 🌤️";
    return "Good Evening! 🌙";
  };

  // Get random romantic message
  const romanticMessages = [
    "You're the best thing that ever happened to me 💕",
    "Every moment with you is magical ✨",
    "You make my world beautiful 🌸",
    "I'm counting the seconds until I see you 🥰",
    "You're my favorite person in the universe 💫",
    "Life is better when you're in it 💖",
    "You're beautiful inside and out 🌟",
    "I can't stop thinking about you 💭",
  ];

  const randomMessage =
    romanticMessages[Math.floor(Math.random() * romanticMessages.length)];

  return (
    <div className="final-container">
      <div className="confetti">
        <span>🎉</span>
        <span>🎊</span>
        <span>💖</span>
        <span>✨</span>
        <span>🌟</span>
        <span>🎆</span>
        <span>💕</span>
        <span>🌈</span>
      </div>

      <h1 className="final-title">Yay! It's a Date! 💕</h1>

      <div className="final-subtitle">
        <p className="greeting">{getTimeMessage()}</p>
        <p className="excited-text">I'm so excited for our special day! 🥳</p>
      </div>

      <div className="date-details-card">
        <h3 className="card-title">📋 Our Perfect Date Plan</h3>

        <div className="date-details">
          {dateData?.date && (
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span className="detail-text">
                {new Date(dateData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          )}

          {dateData?.time && (
            <div className="detail-item">
              <span className="detail-icon">⏰</span>
              <span className="detail-text">{dateData.time}</span>
            </div>
          )}

          {dateData?.place && (
            <div className="detail-item">
              <span className="detail-icon">🗺️</span>
              <span className="detail-text">{dateData.place}</span>
            </div>
          )}

          {dateData?.food && (
            <div className="detail-item">
              <span className="detail-icon">🍕</span>
              <span className="detail-text">{dateData.food}</span>
            </div>
          )}

          {dateData?.dessert && (
            <div className="detail-item">
              <span className="detail-icon">🎂</span>
              <span className="detail-text">{dateData.dessert}</span>
            </div>
          )}

          {dateData?.activity && (
            <div className="detail-item">
              <span className="detail-icon">💫</span>
              <span className="detail-text">{dateData.activity}</span>
            </div>
          )}

          {dateData?.dressCode && (
            <div className="detail-item">
              <span className="detail-icon">👗</span>
              <span className="detail-text">{dateData.dressCode}</span>
            </div>
          )}
        </div>

        {dateData?.specialRequest && (
          <div className="special-request">
            <span className="request-icon">💌</span>
            <p className="request-text">"{dateData.specialRequest}"</p>
          </div>
        )}
      </div>

      {daysLeft > 0 && (
        <div className="countdown">
          <span className="countdown-icon">⏳</span>
          <span className="countdown-text">
            Only <strong>{daysLeft}</strong> {daysLeft === 1 ? "day" : "days"}{" "}
            to go!
          </span>
        </div>
      )}

      <div className="love-message">
        <p className="romantic-message">💕 {randomMessage}</p>
        <p className="excited-message">I can't wait to see you! 😍</p>
        <p className="promise-message">
          ✨ This will be the best date ever! ✨
        </p>
      </div>

      <div className="fun-facts">
        <div className="fact-item">
          <span>💝</span>
          <span>You said YES!</span>
        </div>
        <div className="fact-item">
          <span>⭐</span>
          <span>You're amazing!</span>
        </div>
        <div className="fact-item">
          <span>🌸</span>
          <span>You made my day!</span>
        </div>
      </div>

      <div className="signature">
        <p>Made with ❤️ by Shashwat</p>
        <p className="signature-emoji">✨ Forever Yours ✨</p>
      </div>
    </div>
  );
};

export default FinalPage;
