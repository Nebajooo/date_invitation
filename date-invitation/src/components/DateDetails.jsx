import React, { useState, useEffect } from "react";
import "./DateDetails.css";

const DateDetails = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    place: "",
    food: "",
    dessert: "",
    activity: "",
    dressCode: "",
    specialRequest: "",
  });

  const [showLoveNote, setShowLoveNote] = useState(false);
  const [selectedPlaceImage, setSelectedPlaceImage] = useState("");
  const [selectedFoodImage, setSelectedFoodImage] = useState("");
  const [weather, setWeather] = useState("☀️");

  // Simulated weather based on date
  useEffect(() => {
    if (formData.date) {
      const weatherOptions = [
        "☀️ Sunny",
        "⛅ Partly Cloudy",
        "🌤️ Nice",
        "🌹 Perfect",
        "☁️ Mild",
      ];
      const randomWeather =
        weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
      setWeather(randomWeather);
    }
  }, [formData.date]);

  const places = [
    {
      name: "Fancy Restaurant 🍽️",
      emoji: "🍽️",
      vibe: "Romantic & Classy",
      image: "🌹",
    },
    { name: "Movie Theater 🎬", emoji: "🎬", vibe: "Cozy & Fun", image: "🎫" },
    {
      name: "Beautiful Park 🌳",
      emoji: "🌳",
      vibe: "Peaceful & Natural",
      image: "🌸",
    },
    {
      name: "Sunset 🏖️",
      emoji: "🏖️",
      vibe: "Dreamy & Relaxing",
      image: "🌅",
    },
    {
      name: "Coffee Shop ☕",
      emoji: "☕",
      vibe: "Warm & Intimate",
      image: "📚",
    },
    {
      name: "Bowling 🎳 ",
      emoji: "🎳",
      vibe: "Exciting & Cool",
      image: "🧑‍🤝‍🧑",
    },
    {
      name: "Museum 🏛️",
      emoji: "🏛️",
      vibe: "Cultural & Inspiring",
      image: "🎨",
    },
    {
      name: "Rooftop Bar 🥂",
      emoji: "🥂",
      vibe: "Elegant & Stunning",
      image: "🌃",
    },
    // {
    //   name: "Botanical Garden 🌺",
    //   emoji: "🌺",
    //   vibe: "Serene & Beautiful",
    //   image: "🦋",
    // },
    // {
    //   name: "Arcade Games 🎮",
    //   emoji: "🎮",
    //   vibe: "Playful & Fun",
    //   image: "🏆",
    // },
  ];

  const foods = [
    {
      name: "Pasta 🍝",
      emoji: "🍝",
      type: "Comfort Food",
      image: "🇮🇹",
    },
    {
      name: "Tibs 🥩",
      emoji: "🥩",
      type: "Fresh & Elegant",
      image: "🥩",
    },
    { name: "Lasagna 🍝", emoji: "🍝", type: "Spicy & Fun", image: "🍝" },
    {
      name: "Ertib 🍔",
      emoji: "🍔",
      type: "Classic & Luxurious",
      image: "🔥",
    },
    {
      name: "Pizza Night 🍕",
      emoji: "🍕",
      type: "Casual & Delicious",
      image: "🇮🇹",
    },
    {
      name: "Burger 🍔",
      emoji: "🍔",
      type: "Fresh & Nutritious",
      image: "🍔",
    },
    {
      name: "Seafood 🐟",
      emoji: "🐟",
      type: "Luxury & Exquisite",
      image: "🐟",
    },
    {
      name: "Dessert First 🍰",
      emoji: "🍰",
      type: "Sweet & Indulgent",
      image: "🎂",
    },
    {
      name: "Noodles 🍜",
      emoji: "🍜",
      type: "Flavorful & Aromatic",
      image: "🍜",
    },
    {
      name: "Chicken 🍗 ",
      emoji: "🍗",
      type: "Testy & Yummy",
      image: "🍗 ",
    },
  ];

  const desserts = [
    "Chocolate Cake 🍫",
    "Ice Cream  🍦",
    "Cheesecake 🍰",
    "Red Velvet Cake ❤️",
    "Tiramisu ☕",
    "Black Forest Cake 🍒",
    "Vanilla Sponge Cake 🎂",
    "Fruit Cake 🍓",
  ];

  const activities = [
    "Walk together 🚶",
    "Take photos 📸",
    "Hold hands 💕",
    "Watch sunset 🌅",
    "Dance 💃",
    "Share stories 📖",
    "Sing together 🎤",
    "Make memories ✨",
  ];

  const dressCodes = [
    "Smart Casual 👔",
    "Cute & Comfy 💕",
    "Dress to Impress 👗",
    "Relaxed Style 👕",
    "Themed Outfit 🎭",
    "Surprise Me! 🎁",
  ];

  const handlePlaceSelect = (place) => {
    setFormData({ ...formData, place: place.name });
    setSelectedPlaceImage(place.image);
    setShowLoveNote(true);
    setTimeout(() => setShowLoveNote(false), 3000);
  };

  const handleFoodSelect = (food) => {
    setFormData({ ...formData, food: food.name });
    setSelectedFoodImage(food.image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date && formData.time && formData.place && formData.food) {
      // Add some fun animation before submission
      const button = e.target.querySelector(".submit-button");
      button.textContent = "🎉 Planning...";
      button.style.transform = "scale(0.95)";

      setTimeout(() => {
        onSubmit(formData);
      }, 800);
    } else {
      alert("Please fill in all the important details! 💕");
    }
  };

  // Get today's date for min date
  const today = new Date().toISOString().split("T")[0];

  // Get max date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <div className="details-container">
      <div className="details-header">
        <h2 className="details-title">Plan Our Perfect Date! 💕</h2>
        <p className="subtitle">
          I know you'll never choose no 🙄, because you're my real one. I'm so
          happy you chose yes🤗.
        </p>
      </div>

      {showLoveNote && (
        <div className="love-note">
          Great choice! I knew you had good taste! 😍
        </div>
      )}

      <form onSubmit={handleSubmit} className="details-form">
        {/* Date Selection with Weather */}
        <div className="form-group date-group">
          <label>
            <span className="label-icon">📅</span>
            Choose Our Special Day
          </label>
          <div className="date-input-wrapper">
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              min={today}
              max={maxDateStr}
              required
              className="date-input"
            />
            {formData.date && (
              <div className="weather-preview">
                <span className="weather-icon">{weather}</span>
                <span className="weather-text">Perfect for a date!</span>
              </div>
            )}
          </div>
        </div>

        {/* Time Selection */}
        <div className="form-group">
          <label>
            <span className="label-icon">⏰</span>
            What Time?
          </label>
          <select
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
            className="styled-select"
          >
            <option value="">Pick a time...</option>
            <option value="10:00 AM">Morning ☀️ (10:00 AM)</option>
            <option value="12:00 PM">Mid Day 🌤️ (12:00 PM)</option>
            <option value="2:00 PM">Afternoon 🌞 (2:00 PM)</option>
            <option value="5:00 PM">Early Afternoon 🌅 (5:00 PM)</option>
            <option value="7:00 PM">Evening 🌙 (7:00 PM)</option>
            <option value="8:30 PM">Late Night ✨ (8:30 PM)</option>
          </select>
        </div>

        {/* Place Selection with Cards */}
        <div className="form-group place-group">
          <label>
            <span className="label-icon">🗺️</span>
            Pick a Place
          </label>
          <div className="place-grid">
            {places.map((place) => (
              <div
                key={place.name}
                className={`place-card ${formData.place === place.name ? "selected" : ""}`}
                onClick={() => handlePlaceSelect(place)}
              >
                <div className="place-emoji">{place.emoji}</div>
                <div className="place-name">{place.name}</div>
                <div className="place-vibe">{place.vibe}</div>
                {formData.place === place.name && (
                  <div className="check-mark">✅</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Food Selection with Cards */}
        <div className="form-group food-group">
          <label>
            <span className="label-icon">🍕</span>
            Choose Your Food
          </label>
          <div className="food-grid">
            {foods.map((food) => (
              <div
                key={food.name}
                className={`food-card ${formData.food === food.name ? "selected" : ""}`}
                onClick={() => handleFoodSelect(food)}
              >
                <div className="food-emoji">{food.emoji}</div>
                <div className="food-name">{food.name}</div>
                <div className="food-type">{food.type}</div>
                {formData.food === food.name && (
                  <div className="check-mark">✅</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dessert Selection */}
        <div className="form-group">
          <label>
            <span className="label-icon">🎂</span>
            Dessert (Because we deserve it!)
          </label>
          <select
            value={formData.dessert}
            onChange={(e) =>
              setFormData({ ...formData, dessert: e.target.value })
            }
            className="styled-select"
          >
            <option value="">Pick a dessert...</option>
            {desserts.map((dessert) => (
              <option key={dessert} value={dessert}>
                {dessert}
              </option>
            ))}
          </select>
        </div>

        {/* Activity Selection */}
        <div className="form-group">
          <label>
            <span className="label-icon">💫</span>
            Special Activity
          </label>
          <div className="activity-grid">
            {activities.map((activity) => (
              <div
                key={activity}
                className={`activity-chip ${formData.activity === activity ? "selected" : ""}`}
                onClick={() => setFormData({ ...formData, activity })}
              >
                {activity}
              </div>
            ))}
          </div>
        </div>

        {/* Dress Code */}
        <div className="form-group">
          <label>
            <span className="label-icon">👗</span>
            Dress Code
          </label>
          <div className="dress-grid">
            {dressCodes.map((dress) => (
              <div
                key={dress}
                className={`dress-chip ${formData.dressCode === dress ? "selected" : ""}`}
                onClick={() => setFormData({ ...formData, dressCode: dress })}
              >
                {dress}
              </div>
            ))}
          </div>
        </div>

        {/* Special Request */}
        <div className="form-group">
          <label>
            <span className="label-icon">💌</span>
            Something Special?
          </label>
          <textarea
            placeholder="Anything else you'd like? A surprise? A special request? I'll make it happen! 🌟"
            value={formData.specialRequest}
            onChange={(e) =>
              setFormData({ ...formData, specialRequest: e.target.value })
            }
            className="special-textarea"
            rows="3"
          />
        </div>

        {/* Summary Preview */}
        {formData.date && formData.place && formData.food && (
          <div className="date-preview">
            <h4>✨ Your Perfect Date Plan ✨</h4>
            <div className="preview-items">
              <span>
                📅{" "}
                {new Date(formData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>⏰ {formData.time}</span>
              <span>🗺️ {formData.place}</span>
              <span>🍕 {formData.food}</span>
              {formData.dessert && <span>🎂 {formData.dessert}</span>}
              {formData.activity && <span>💫 {formData.activity}</span>}
            </div>
          </div>
        )}

        <button type="submit" className="submit-button">
          Let's Go! ✨
        </button>

        <div className="date-note">
          <p>❤️ I'll make sure everything is perfect for you!</p>
        </div>
      </form>
    </div>
  );
};

export default DateDetails;
