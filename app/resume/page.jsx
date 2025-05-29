"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DownloadButton from "../../components/DownloadButton";

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      variants={containerVariants}
      className="min-h-screen w-full px-4 py-8 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-8 py-15">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional Experience & Skills
          </p>
        </motion.div>

        {/* Download CV Section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <DownloadButton
            fileUrl="/assets/Idioma_CV.png"
            fileName="Idioma_CV.png"
            buttonText="Download CV"
          />
        </motion.div>

        {/* Resume Display Section */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/9]"
        >
          <Image
            src="/assets/Idioma_Resume.png"
            alt="Resume"
            fill
            className="object-contain rounded-lg shadow-lg"
            priority
          />
        </motion.div>

        {/* Mobile View Instructions */}
        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-gray-500 dark:text-gray-400 md:hidden"
        >
          <p>Pinch to zoom for better view on mobile devices</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
