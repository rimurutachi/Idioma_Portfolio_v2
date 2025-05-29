"use client";

import { motion } from "framer-motion";
import SkillBar from "@/components/SkillBar";
import TrainingCard from "@/components/TrainingCard";
import CertificateCard from "@/components/CertificateCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiJavascriptFill,
} from "react-icons/ri";

import { BiLogoPython } from "react-icons/bi";
import { SiMysql, SiMongodb, SiGodotengine } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri";

const skills = [
  { name: "React.js", percentage: 70, icon: <RiReactjsFill /> },
  { name: "Next.js", percentage: 50, icon: <RiNextjsFill /> },
  { name: "HTML5", percentage: 90, icon: <RiHtml5Fill /> },
  { name: "CSS3", percentage: 70, icon: <RiCss3Fill /> },
  { name: "Tailwind CSS", percentage: 45, icon: <RiTailwindCssFill /> },
  { name: "Node.js", percentage: 60, icon: <RiNodejsFill /> },
  { name: "JavaScript", percentage: 65, icon: <RiJavascriptFill /> },
  { name: "Python", percentage: 50, icon: <BiLogoPython /> },
  { name: "MySQL", percentage: 75, icon: <SiMysql /> },
  { name: "MongoDB", percentage: 40, icon: <SiMongodb /> },
  { name: "Github", percentage: 85, icon: <RiGithubFill /> },
  { name: "Godot", percentage: 40, icon: <SiGodotengine /> },
];

const trainings = [
  {
    title: "Advanced Web Development",
    organization: "Tech Academy",
    date: "January 2024",
    description:
      "Comprehensive training on modern web development practices and tools.",
  },
  {
    title: "UI/UX Design Fundamentals",
    organization: "Design Institute",
    date: "December 2023",
    description:
      "Learned essential principles of user interface and experience design.",
  },
];

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Meta",
    date: "March 2024",
    credentialId: "META-FSWD-2024",
    link: "#",
  },
  {
    title: "Advanced JavaScript Concepts",
    issuer: "JavaScript Institute",
    date: "February 2024",
    credentialId: "JS-ADV-2024",
    link: "#",
  },
];

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

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="container mx-auto px-4 py-20 h-[calc(100vh-4rem)] max-w-5xl"
    >
      <ScrollArea className="h-full pr-4">
        <div className="max-w-4xl mx-auto py-4">
          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h2 mb-8 text-center"
            >
              Acquired <span className="text-tertiary">Skills</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillBar {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trainings Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h2 mb-8 text-center"
            >
              Professional <span className="text-tertiary">Trainings</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainings.map((training, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TrainingCard {...training} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h2 mb-8 text-center"
            >
              Professional <span className="text-tertiary">Certificates</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CertificateCard {...certificate} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollArea>
    </motion.section>
  );
};

export default Skills;
