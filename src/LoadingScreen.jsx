import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

const catSrc = new URL("./assets/cat.jpeg", import.meta.url).href;

function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [greeting, setGreeting] = useState("");
  const fullGreeting = "Hello, I'm Abhinav...";

  // Progress bar animation
  useEffect(() => {
    const duration = 2800; // ms
    const intervalMs = 30;
    const step = 100 / (duration / intervalMs);
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    let idx = 0;
    const speed = 90;
    const timer = setInterval(() => {
      if (idx < fullGreeting.length) {
        setGreeting(fullGreeting.slice(0, idx + 1));
        idx++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  // Fire onFinish after loading completes
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(onFinish, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  // Lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const particles = Array.from({ length: 12 });

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Floating particles */}
      <div className="loading-particles">
        {particles.map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Cat with glow */}
      <motion.div
        className="loading-cat-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="cat-glow" />
        <div className="cat-orbit" />
        <img
          src={catSrc}
          alt="Loading cat"
          className="loading-cat-img"
        />
      </motion.div>

      {/* Greeting */}
      <motion.div
        className="loading-greeting"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {greeting}
        <span className="greeting-cursor">|</span>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="loading-progress-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div
          className="loading-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </motion.div>

      <motion.div
        className="loading-percentage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        {Math.round(progress)}%
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
