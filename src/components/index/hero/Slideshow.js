import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Slideshow({ images }) {
  const [prevIndex, setPrevIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);
  const alt = "image";
  const slices = 9;
  const sliceWidth = 100 / slices;

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
      setNextIndex((nextIndex) => (nextIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative h-screen aspect-16/9">
      {/* via-[#082833]/25 */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent z-[2]" />
      {images.map((image, imageIndex) => (
        <div
          key={imageIndex}
          className={`absolute inset-0 ${imageIndex === currentIndex ? "current-index" : imageIndex === prevIndex ? "previous-index" : imageIndex === nextIndex ? "nextindex" : ""}`}
        >
          {Array.from({ length: slices }).map((_, index) => (
            <div
              key={index}
              className={`absolute h-full transition-transform duration-500`}
              style={{
                left: `${index * sliceWidth}%`,
                width: `${sliceWidth}%`,
                transitionDelay: `${index * 50}ms`,
                transform:
                  imageIndex == currentIndex
                    ? "translateY(0)"
                    : "translateY(-100%)",
              }}
            >
              <Image
                className="object-cover"
                src={image}
                alt={alt}
                fill
                style={{
                  objectPosition: `calc(${index * sliceWidth}% + ${index * (100 / slices / slices)}% + ${index * 0.15}%) center`,
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
