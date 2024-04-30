import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

export const TypingAnimation = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(words[index]);
  const [letters, setLetters] = useState(word.split("")); // State to hold the letters of the current word
  const wordRef = useRef(word); // Use a ref to store the current word
  const controls = useAnimation(); // Framer Motion animation controls

  // Function to update the word and trigger the animation
  const updateWordAndAnimate = useCallback(() => {
    // Update the index and fetch the new word
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % words.length;
      const newWord = words[newIndex];
      wordRef.current = newWord;
      setWord(newWord);
      return newIndex;
    });

    // First, animate the current word to opacity and scale 0
    controls
      .start({
        opacity: [1, 0],
        scale: [1, 0],
        transition: { duration: 0.5 },
      })
      .then(() => {
        // Update the letters state to trigger a re-render of the letters
        setLetters(wordRef.current.split(""));

        // Delay the start of the animation until after the letters have been rendered
        setTimeout(() => {
          controls.start({
            opacity: [0, 1],
            scale: [0, 1],
          });
        }, 100); // Adjust the delay as needed
      });
  }, [words, controls]); // Dependencies of the function

  useEffect(() => {
    // Trigger the animation immediately when the component mounts
    updateWordAndAnimate();

    const timer = setInterval(() => {
      updateWordAndAnimate(); // Use the function to update the word and animate
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(timer);
  }, [updateWordAndAnimate]);

  return (
    <div className="flex flex-row items-center">
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ opacity: 0 }} // Initial opacity is 0
          animate={controls}
          className="inline-block"
          transition={{ duration: 1, delay: i * 0.07 }} // Delay each letter by 0.1 seconds
        >
          <b className="text-7xl md:text-8xl text-white">{letter}</b>
        </motion.div>
      ))}
    </div>
  );
};
