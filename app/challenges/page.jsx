"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineExclamationCircle } from "react-icons/hi";
import { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const challenges = [
  {
    title: "Technical Challenges",
    items: [
      "Learning complex programming concepts and frameworks",
      "Debugging intricate code issues",
      "Keeping up with rapidly evolving technologies",
      "Balancing performance and code maintainability",
    ],
  },
  {
    title: "Project Management",
    items: [
      "Meeting tight deadlines while maintaining quality",
      "Coordinating with team members across different time zones",
      "Managing project scope and requirements",
      "Prioritizing tasks effectively",
    ],
  },
];

const learnings = [
  {
    title: "Technical Growth",
    items: [
      "The importance of writing clean, maintainable code",
      "How to effectively debug and solve complex problems",
      "The value of continuous learning and adaptation",
      "Best practices in software development",
    ],
  },
  {
    title: "Personal Development",
    items: [
      "Time management and productivity techniques",
      "Effective communication and collaboration",
      "The power of persistence and problem-solving",
      "Balancing work and personal growth",
    ],
  },
];

const Challenges = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    hover: {
      x: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <ScrollArea className="h-screen">
      <motion.section
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-screen pt-32 pb-16"
      >
        <motion.div style={{ opacity, scale }} className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h1 mb-16"
          >
            Challenges & <span className="text-tertiary">Learnings</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges Section */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              className="bg-secondary p-8 rounded-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="flex items-center gap-4 mb-8 relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <HiOutlineExclamationCircle className="text-4xl text-tertiary" />
                </motion.div>
                <h2 className="h2">Challenges</h2>
              </div>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-8 relative">
                  {challenges.map((category, index) => (
                    <div key={index} className="space-y-4">
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="h4 text-accent"
                      >
                        {category.title}
                      </motion.h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            custom={itemIndex}
                            className="flex items-start gap-3 cursor-default"
                          >
                            <motion.span
                              whileHover={{ scale: 1.5 }}
                              className="text-accent mt-1"
                            >
                              •
                            </motion.span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </motion.div>

            {/* Learnings Section */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              className="bg-secondary p-8 rounded-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <div className="flex items-center gap-4 mb-8 relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <HiOutlineLightBulb className="text-4xl text-tertiary" />
                </motion.div>
                <h2 className="h2">Learnings</h2>
              </div>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-8 relative">
                  {learnings.map((category, index) => (
                    <div key={index} className="space-y-4">
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="h4 text-accent"
                      >
                        {category.title}
                      </motion.h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            custom={itemIndex}
                            className="flex items-start gap-3 cursor-default"
                          >
                            <motion.span
                              whileHover={{ scale: 1.5 }}
                              className="text-accent mt-1"
                            >
                              •
                            </motion.span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </ScrollArea>
  );
};

export default Challenges;
