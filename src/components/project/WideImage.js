import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function WideImage({ image }) {
  const [widthClass, setWidthClass] = useState("w-11/12"); // Initial width class
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidthClass("w-11/12 md:w-10/12"); // Set width class to w-10/12 when in viewport
        } else {
          setWidthClass("w-full md:w-11/12"); // Set width class back to w-11/12 when not in viewport
        }
      },
      {
        rootMargin: "40px",
        threshold: 0.4, // Adjust this value to control when the transition starts
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <Image
      ref={imageRef}
      src={image}
      alt=""
      className={`mx-auto my-10 h-auto object-cover transition-all duration-500 ease-in-out ${widthClass} !static`}
      fill
    />
  );
}
