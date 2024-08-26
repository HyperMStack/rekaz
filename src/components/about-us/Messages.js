import React, { useEffect, useRef, useState } from "react";

export default function Messages({ messages }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && observer.current) observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-8 overflow-hidden max-w-[1350px] mx-auto"
    >
      <div className="z-10">
        {messages.map((item, index) => {
          const opacityClass = isVisible ? `opacity-100` : "opacity-0";
          const translateXClass = isVisible
            ? `${index === 1 ? `translate-x-1/2` : index === 2 ? `translate-x-full` : "translate-x-0"}`
            : `translate-x-0`;
          return (
            <p
              key={index}
              text={item.message}
              className={`border-black border text-center content-center my-6 mx-3 md:mx-8 lg:mx-0 h-48 md:h-56 lg:h-32 p-6 lg:p-6 md:w-[45%] lg:w-1/2 rounded-lg ${opacityClass} md:${translateXClass} transition-all duration-500 ease-in-out`}
            >
              {item.message}
            </p>
          );
        })}
      </div>
    </div>
  );
}

const cards = [
  {
    text: `We serve our clients through an open book approach to the building process. We aim to be the best construction company for our clients by exceeding their expectations in quality work and customer service.`,
  },
  {
    text: `We serve our employees by providing a supportive and safe work environment. We aim to be the best in the industry in employee training and benefits.`,
  },
  {
    text: `We serve our peers by always being professional and collaborative. We aim to be the best partner in building by listening and communicating effectively to solve problems and work efficiently.`,
  },
];
