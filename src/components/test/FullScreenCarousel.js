import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function FullScreenCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const alt = "image";
  const slices = 7;
  const sliceWidth = 100 / slices;

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
  }, [currentIndex]);

  return (
    <div className="relative w-full aspect-16/9 overflow-hidden">
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
                src={image}
                alt={alt}
                fill
                objectFit="cover"
                style={{
                  objectPosition: `calc(${index * sliceWidth}% + ${index * (100 / slices / slices)}%) center`,
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
