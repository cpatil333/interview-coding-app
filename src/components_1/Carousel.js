import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        alt="carousel"
        src={images[currentIndex]}
        style={{
          width: "600px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        style={{
          position: "absolute",
          top: "50%",
          left: "400px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        &#10094; {/* Right Arrow */}
      </button>

      <button
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "400px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
