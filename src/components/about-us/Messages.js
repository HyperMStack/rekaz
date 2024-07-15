import React, { useEffect, useRef, useState } from "react";

export default function Messages() {
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
        {cards.map((item, index) => (
          <p
            key={index}
            text={item.text}
            className={`border-black border text-center content-center my-6 h-52 md:h-28 p-4 lg:w-1/2 rounded-lg`}
            style={{
              transform: isVisible
                ? `translateX(${index * 50}%)`
                : "translateX(0)",
              opacity: isVisible ? `1` : `0`,
              transition: "all 0.5s ease",
            }}
          >
            {item.text}
          </p>
        ))}
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
