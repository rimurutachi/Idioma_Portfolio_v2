import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="space-y-8">
      {/* Personal Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/5 p-6 rounded-lg"
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-tertiary">Personal Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate computer science student with a deep love for technology and innovation. 
              My journey in tech has been driven by curiosity and a desire to create meaningful solutions. 
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the tech community.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/assets/jm.jpg"
              alt="Personal photo"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Family Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-primary/5 p-6 rounded-lg"
      >
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-tertiary">Family Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              Coming from a supportive family that values education and personal growth, 
              I've been fortunate to have the encouragement to pursue my passion in technology. 
              My family's emphasis on continuous learning and hard work has shaped my approach 
              to both life and my career in tech.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/assets/familypic.jpg"
              alt="Family photo"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe; 