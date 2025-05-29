"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Stats from "@/components/Stats";
import Quote from "@/components/Quote";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";
import AboutMe from "@/components/AboutMe";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* image and social icons */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative items-center">
            <Image
              src="/assets/idioma2.png"
              width={380}
              height={580}
              alt="avatar"
              className="z-20 relative transform translate-x-2"
            />
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[390px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30"></div>

            {/* blob */}
            <div className="absolute top-[60px] -left-[65px] z-10">
              <Blob containerStyles="w-[480px] h-[480px]" />
            </div>

            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[15px] mt-8"
              iconStyles="w-[48px] h-[48px] text-[22px] text-white hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-tertiary">Jimmar</span> Idioma
              </h2>
              <p className="max-w-[540px] mb-12">
                I'm a computer science student based in the Philippines with a
                passion of building and learning new things in a world full of
                technology.
              </p>
              <div className="flex flex-col items-start gap-16">
                <AboutMe />
                <Stats />
                <Quote />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
