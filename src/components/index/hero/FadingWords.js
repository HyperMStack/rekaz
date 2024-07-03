import { useEffect, useState } from "react";

const FadingWords = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 1000); // Duration of fade-out + small delay
    }, 3000); // Duration of each word on screen

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-row items-center">
      {/* <span className={`${styles.word} ${isVisible ? styles.visible : styles.hidden}`}> */}
      <span
        className={`inline-block transition-opacity duration-500 ${isVisible ? "animate-fadeInRightToLeft" : "animate-fadeOutLeftToRight"}`}
      >
        <b className="text-6xl md:text-7xl text-white">
          {words[currentWordIndex]}
        </b>
      </span>
    </div>
  );
};

export default FadingWords;
