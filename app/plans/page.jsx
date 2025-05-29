"use client";

import { motion } from "framer-motion";
import PlansContent from "@/components/PlansContent";

const Plans = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen pb-16"
    >
      <PlansContent />
    </motion.section>
  );
};

export default Plans;
