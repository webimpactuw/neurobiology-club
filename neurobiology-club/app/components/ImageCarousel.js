"use client"
import { useState } from "react";
import Image from "next/image";

const images = ["/home1.jpg", "/home2.jpg", "/home3.jpg", "/home4.jpg"];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        width: "525px",
        height: "415px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={images[index]}
        alt={`homepage image ${index + 1}`}
        fill
        style={{
          objectFit: "cover",
        }}
      />
      
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.9)")}
        onMouseLeave={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.7)")}
        aria-label="Previous image"
      >
        <Image
          src="/single-left.svg"
          alt="Previous"
          width={20}
          height={20}
        />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.9)")}
        onMouseLeave={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.7)")}
        aria-label="Next image"
      >
        <Image
          src="/single-right.svg"
          alt="Next"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}