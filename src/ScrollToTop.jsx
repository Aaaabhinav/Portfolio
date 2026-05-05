import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const btnStyle = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid greenyellow",
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(8px)",
    color: "greenyellow",
    fontSize: "1.3rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    boxShadow: "0 0 20px rgba(173, 255, 47, 0.2)",
    transition: "box-shadow 0.3s ease",
    fontFamily: "inherit",
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollUp}
          style={btnStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(173, 255, 47, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
