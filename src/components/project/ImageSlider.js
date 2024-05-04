import { useState } from "react";

export function ImageSlider({ images }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function toggleActiveImage(index) {
    return () => {
      setActiveImageIndex(index);
    };
  }

  return (
    <>
      <div className="container hidden md:flex mx-auto h-172 aspect-3/2 overflow-hidden mt-16">
        {images.map(({ image }, index) => (
          <img
            key={index}
            style={{
              transition: "all 0.4s cubic-bezier(0.32, 0, 0.67, 0)",
            }}
            className={`img h-full object-cover overflow-hidden border-2 border-transparent cursor-pointer ${index == activeImageIndex ? "w-[300%]" : "w-2/12 opacity-80"}`}
            src={image}
            alt=""
            onClick={toggleActiveImage(index)}
          />
        ))}
      </div>

      <div className="container flex flex-col md:hidden mx-auto h-172 aspect-2/3 overflow-hidden mt-16">
        {images.map(({ image }, index) => (
          <img
            key={index}
            style={{
              transition: "all 0.4s cubic-bezier(0.32, 0, 0.67, 0)",
            }}
            className={`img w-full object-cover overflow-hidden border border-transparent cursor-pointer ${index == activeImageIndex ? "h-[300%]" : "h-2/12 opacity-80"}`}
            src={image}
            alt=""
            onClick={toggleActiveImage(index)}
          />
        ))}
      </div>
    </>
  );
}
