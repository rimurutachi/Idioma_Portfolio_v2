"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "CVSU Alumni Tracking System",
    description:
      "A simple alumni tracking system use to track and modify alumni information in specific colleges. Demo not available",
    image: "/assets/alumni_system.png",
    technologies: ["HTML5", "CSS", "PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/rimurutachi/alumni_tracking_system",
    demo: "",
  },
  {
    title: "Codev",
    description:
      "A project made of the same group in CVSU Website, building this website is a serious work.",
    image: "/assets/codev.png",
    technologies: ["HTML5", "CSS", "JavaScript"],
    github: "https://github.com/gerlyntan07/codev",
    demo: "https://gerlyntan07.github.io/codev/",
  },
  {
    title: "CVSU Website",
    description:
      "This project is a collaboration of aspiring developer students for their school project.",
    image: "/assets/cvsu_website.png",
    technologies: ["HTML5", "CSS", "JavaScript"],
    github: "https://github.com/gerlyntan07/group1_cvsuwebsite",
    demo: "https://gerlyntan07.github.io/group1_cvsuwebsite/",
  },
  {
    title: "MRJ Inventory System",
    description:
      "Made for small businesses to modify and handle their products in a inventory. Demo not available.",
    image: "/assets/mrj_inventory_system.png",
    technologies: ["HTML5", "PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/rimurutachi/mrj_inventory_system",
    demo: "",
  },
  {
    title: "Orderizz",
    description:
      "Order Management System for Winjhen Shop. Demo not available.",
    image: "/assets/orderizz.png",
    technologies: ["Java", "MySQL", "PHP", "Bootstrap"],
    github:
      "https://drive.google.com/drive/folders/1__MFfA-5c3RPps7Q96fGZBy-7NzIf13g",
    demo: "",
  },
  {
    title: "CVSU Enrollment System",
    description:
      "A collaboration of computer science students made to have an enrollment online in CVSU Bacoor.",
    image: "/assets/enrollment_system.png",
    technologies: ["React Vite", "Express", "MongoDB", "Node.js", "Bootstrap"],
    github: "https://github.com/rimurutachi/enrollment_system_new",
    demo: "https://enrollment-system-client.vercel.app/",
  },
  {
    title: "Idioma Portfolio V1",
    description:
      "First version of developer's portfolio.",
    image: "/assets/Idioma_PortfolioV1.png",
    technologies: ["React Vite", "CSS3", "Bootstrap"],
    github: "https://github.com/rimurutachi/Idioma_WebPortfolio",
    demo: "https://idioma-web-portfolio.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2.6,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto py-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.4 }}
          className="h1 mb-12"
        >
          My Latest <span className="text-tertiary">Projects</span>
        </motion.h1>

        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </ScrollArea>
      </div>
    </motion.section>
  );
};

export default Projects;
