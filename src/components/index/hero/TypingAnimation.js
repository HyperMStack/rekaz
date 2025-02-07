import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TypingAnimation = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <div className="flex flex-row items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]} // Forces re-render when the word changes
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          {words[index].split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="inline-block"
            >
              <b className="text-6xl md:text-7xl text-white">{letter}</b>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
