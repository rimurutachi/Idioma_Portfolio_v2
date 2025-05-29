"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/public/assets/idioma2.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";

const Home = () => {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      {/* pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hello! I'm Jimmar Idioma, <br />
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Web Developer",
                2000,
                "Game Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              cursor={false}
              repeat={Infinity}
              className="text-tertiary"
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            A Computer Science student based in Philippines learning and
            exploring set of skills in this field. Achieving of what's
            impossible.
          </p>
          <button 
            className="btn btn-lg btn-accent mb-16"
            onClick={() => router.push('/contact')}
          >
            <div className="flex items-center gap-3">
              <span className="text-black">Contact Me!</span>
              <MdArrowOutward className="text-xl text-black" />
            </div>
          </button>
          {/* contact info */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* phone number */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-tertiary">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+63 955 563 4705</span>
            </div>
            {/* email */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-tertiary">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>jimmaridioma20@gmail.com</span>
            </div>
          </div>
          {/* social icons */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-black hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>

        {/* image and blob */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyles="w-[560px] h-[560px]" />
          {/* avatar image */}
          <Image
            src={avatarImg}
            alt="avatar"
            width={500}
            height={680}
            quality={100}
            className="absolute -top-20 left-[65px]"
          />
          {/* overlay gradient */}
          <div className="w-full h-[170px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
