"use client";

import { motion } from "framer-motion";

const SkillBar = ({ name, percentage, icon }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-sm text-accent">{percentage}%</span>
      </div>
      <div className="h-2 bg-tertiary/70 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar; 