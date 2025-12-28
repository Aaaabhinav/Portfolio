import React from "react";
import { motion } from "framer-motion";
import aboutData from "./aboutData";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <hr />

      <div className="timeline">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            

            <div className="content">
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
