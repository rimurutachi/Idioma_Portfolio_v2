import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-white/60 text-sm max-w-[300px] text-center md:text-left">
              Building digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-medium">Quick Links</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="/" className="text-white/60 hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-white/60 hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/challenges" className="text-white/60 hover:text-accent transition-colors">
                Challenges
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-medium">Connect</h3>
            <Socials
              containerStyles="flex gap-4"
              iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} Jimmar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 