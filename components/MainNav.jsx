import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import DownloadButton from "./DownloadButton";

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <div className="mb-16">
          <DownloadButton
            fileUrl="/assets/Idioma_CV.pdf"
            fileName="Idioma_CV.pdf"
            buttonText="Download CV"
          />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
