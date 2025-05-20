"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/home1.jpg", "/home2.jpg", "/home3.jpg", "/home4.jpg"];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 2000);
    }, 10000);

    return () => clearInterval(cycle);
  }, []);

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
        key={index}
        src={images[index]}
        alt={`homepage image ${index + 1}`}
        fill
        style={{
          objectFit: "cover",
          transition: fadeIn ? "opacity 1s ease-in" : "opacity 2s ease-out",
          opacity: fadeIn ? 1 : 0,
        }}
      />
    </div>
  );
}