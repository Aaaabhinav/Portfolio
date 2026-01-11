import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const videoSrc = new URL("./assets/Break_LOOP.mp4", import.meta.url).href;
const resumeSrc = new URL("./assets/Abhinav_Resume.pdf", import.meta.url).href;

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
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

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeSrc;
    link.download = "Abhinav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download message
    setShowDownloadMessage(true);
    setTimeout(() => {
      setShowDownloadMessage(false);
    }, 3000);
  };

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
          <div className="buttons-container">
            <motion.button
              className="download-resume-btn"
              onClick={handleDownloadResume}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
            <motion.button
              className="know-about-me-btn"
              onClick={() => {
                document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know about me
            </motion.button>
          </div>
          
          {/* Download Success Message */}
          {showDownloadMessage && (
            <motion.div
              className="download-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Resume downloaded ✓
            </motion.div>
          )}
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
