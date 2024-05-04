import { useState } from "react";

export function ImageSlider({ images }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function toggleActiveImage(index) {
    return () => {
      setActiveImageIndex(index);
    };
  }

  return (
    <div className="container flex flex-col md:flex-row mx-auto h-172 aspect-2/3 md:aspect-3/2 overflow-hidden mt-16">
      {images.map(({ image }, index) => (
        <img
          key={index}
          style={{
            transition: "all 0.4s cubic-bezier(0.32, 0, 0.67, 0)",
          }}
          className={`img w-full md:h-full object-cover overflow-hidden border md:border-2 border-transparent cursor-pointer ${index == activeImageIndex ? "h-[300%] md:w-[300%]" : "h-2/12 md:w-2/12 opacity-80"}`}
          src={image}
          alt=""
          onClick={toggleActiveImage(index)}
        />
      ))}
    </div>
  );
}
