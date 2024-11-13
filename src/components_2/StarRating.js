import React, { useState } from "react";

const StarRating = ({ totalStart = 5 }) => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h2>Star Rating</h2>
      {[...Array(totalStart)].map((star, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            style={{
              cursor: "pointer",
              fontSize: "50px",
              color: starValue <= rating ? "gold" : "gray",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
