import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function FullScreenCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const alt = "image";
  const slices = 9;
  const sliceWidth = 100 / slices;

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }, [currentIndex]);

  return (
    <div className="relative h-screen aspect-16/9">
      {images.map((image, imageIndex) => (
        <div key={imageIndex} className={`absolute inset-0`}>
          {Array.from({ length: slices }).map((_, index) => (
            <div
              key={index}
              className={`absolute h-full transition-transform duration-500`}
              style={{
                left: `${index * sliceWidth}%`,
                width: `${sliceWidth}%`,
                transitionDelay: `${index * 50}ms`,
                transform:
                  imageIndex === currentIndex
                    ? "translateY(0)"
                    : "translateY(100%)",
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
