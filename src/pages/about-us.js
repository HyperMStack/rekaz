import React, { useEffect, useState } from "react";
import { aboutUsData } from "@/data/data";

export default function AboutUs() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false); // Reset imageLoaded state before changing the slide
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % aboutUsData.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = aboutUsData[currentSlideIndex].image;
    img.onload = () => setImageLoaded(true);
  }, [currentSlideIndex]);

  const slide = aboutUsData[currentSlideIndex];

  return (
    <>
      <div className={`relative w-screen h-screen bg-gray-100`}>
        <div
          className={`absolute h-full w-full`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: `${imageLoaded ? 1 : 0}`,
            transform: `translateX(${imageLoaded ? "0%" : "-100%"})`,
            transition: "all 1s ease-in-out",
          }}
        ></div>
        <div
          className="absolute bg-cyan-950/70 h-full w-full p-14 md:pt-40 md:ps-20 [clipPath:polygon(5%_4%,95%_4%,94%_96%,5%_96%)] md:[clipPath:polygon(0%_0%,60%_0%,40%_100%,0%_100%)]"
          style={{}}
        >
          <h2 className="mt-4 top-1/4 text-xl md:text-2xl font-bold text-white">
            {slide.title}
          </h2>
          <p className="mt-4 md:mt-10 w-full md:w-2/6 text-base md:text-xl text-white line leading-7">
            {slide.text}
          </p>
        </div>
      </div>
    </>
  );
}
