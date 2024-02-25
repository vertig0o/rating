import React, { useState } from "react";
import Card from "../components/Card";
import "./Rating.css";
import starIcon from "../images/icon-star.svg";

const Rating = ({ rating, setRating, setShowThankYouPage }) => {
  const [activeRating, setActiveRating] = useState(0);

  const handleRatingClick = (value) => {
    setActiveRating(value);
    setRating(value);
  };

  const handleSubmit = () => {
    if (!rating) return;
    setShowThankYouPage(true);
  };

  return (
    <Card>
      <div className="img_container">
        <img src={starIcon} alt="" />
      </div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={`rating_container ${
              activeRating === value ? "active" : ""
            }`}
            onClick={() => handleRatingClick(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <button
        className={`submit_btn ${activeRating > 0 ? "active" : ""}`}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </Card>
  );
};

export default Rating;
