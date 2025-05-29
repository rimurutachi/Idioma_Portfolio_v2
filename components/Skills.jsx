"use client";

import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiPhpFill,
  RiJavascriptFill,
  RiGithubFill,
} from "react-icons/ri";
import { BiLogoPython } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiMongodb, SiGodotengine } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    icon: <RiReactjsFill />,
    name: "React.js",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML5",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS3",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiNodejsFill />,
    name: "Node.js",
  },
  {
    icon: <RiPhpFill />,
    name: "PHP",
  },
  {
    icon: <RiJavascriptFill />,
    name: "Javascript",
  },
  {
    icon: <BiLogoPython />,
    name: "Python",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <RiGithubFill />,
    name: "Github",
  },
  {
    icon: <SiGodotengine />,
    name: "Godot",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-tertiary">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
