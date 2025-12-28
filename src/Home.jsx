import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const videoSrc = new URL("./assets/Break_LOOP.mp4", import.meta.url).href;

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Abhinav here...";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="Home">
      <div className="Home-content">

        {/* Text Section */}
        <motion.div
          className="Home-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            {displayedText}
            <span className="typing-cursor">|</span>
          </h1>
          <h2>
            "A curious developer learning to build solutions that matter.
            Growing as a developer by creating meaningful and practical projects."
          </h2>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="Home-video"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <video autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;
