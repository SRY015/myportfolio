// AnimatedText.js

import React, { useState, useEffect } from "react";

const AnimatedText = ({ textToAnimate, animationSpeed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const animateText = () => {
      if (isRemoving) {
        // Removing letters
        const newText = textToAnimate.substring(0, currentIndex);
        setAnimatedText(newText);
        setCurrentIndex((prevIndex) => prevIndex - 1);

        if (currentIndex <= 0) {
          // Done removing, switch to adding letters
          setIsRemoving(false);
          setCurrentIndex(0);
        }
      } else {
        // Adding letters
        const newText = textToAnimate.substring(0, currentIndex + 1);
        setAnimatedText(newText);
        setCurrentIndex((prevIndex) => prevIndex + 1);

        if (currentIndex >= textToAnimate.length) {
          // Done adding, switch to removing letters
          setIsRemoving(true);
          setCurrentIndex(textToAnimate.length - 1);
        }
      }
    };

    const animationInterval = setInterval(animateText, animationSpeed);

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentIndex, isRemoving, textToAnimate, animationSpeed]);

  return (
    <div>
      <p className="text-white text-2xl md:text-5xl text-center md:text-left">
        I Am <span className="text-white">{animatedText}</span>|
      </p>
    </div>
  );
};

export default AnimatedText;
