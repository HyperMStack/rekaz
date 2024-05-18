import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function ImageSlider({ images }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const autoplayInterval = useRef(null);

  useEffect(() => {
    // Start autoplay when component mounts
    startAutoplay();

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(autoplayInterval.current);
  }, []); // Empty dependency array ensures effect runs only once on mount

  useEffect(() => {
    // Restart autoplay timer when active image index changes
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
      startAutoplay();
    }
  }, [activeImageIndex]);

  function startAutoplay() {
    autoplayInterval.current = setInterval(() => {
      // Increment the active image index
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change interval duration as needed (3.5 seconds)
  }

  function toggleActiveImage(index) {
    return () => {
      // Clear existing autoplay interval when user interacts with the slider
      clearInterval(autoplayInterval.current);
      // Set the active image index
      setActiveImageIndex(index);
    };
  }

  return (
    <div className="container flex flex-col md:flex-row mx-auto h-172 aspect-2/3 md:aspect-3/2 lg:aspect-3/2 overflow-hidden my-16">
      {images?.map(({ image }, index) => (
        <Image
          key={index}
          width={1920}
          height={1080}
          style={{
            transition: "all 0.4s cubic-bezier(0.32, 0, 0.67, 0)",
          }}
          className={`img w-full md:h-full object-cover overflow-hidden border md:border-2 border-transparent cursor-pointer ${index === activeImageIndex ? "h-[300%] md:w-[300%]" : "h-2/12 md:w-2/12 opacity-80"}`}
          src={image}
          alt={`slide-${index}`}
          onClick={toggleActiveImage(index)}
        />
      ))}
    </div>
  );
}
