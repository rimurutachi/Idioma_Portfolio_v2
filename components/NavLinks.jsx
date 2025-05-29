"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Challenges",
    href: "/challenges",
  },
  {
    label: "Plans",
    href: "/plans",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavLinks = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        const charLength = link.label.length;
        const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90px]";
        console.log(charLength);
        return (
          <li key={index}>
            <Link
              href={link.href}
              className={`relative text-lg uppercase text-white ${
                isActive &&
                `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
              }`}
            >
              <span className="relative z-10">{link.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
