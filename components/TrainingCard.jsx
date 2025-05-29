"use client";

import { motion } from "framer-motion";

const TrainingCard = ({ title, organization, date, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary/70 p-6 rounded-lg"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-accent mb-2">{organization}</p>
      <p className="text-sm text-gray-400 mb-3">{date}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

export default TrainingCard; 