import { motion } from "framer-motion";

function ProjectCard({ title, points, link, index }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="prop"

      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      transition={{
        opacity: { duration: 0.7, delay: index * 0.15 },
        y: { duration: 0.7, delay: index * 0.15 }
      }}
    >
      <h2>{title}</h2>
      <hr />
      <ul>
        {points.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.a>
  );
}

export default ProjectCard;
