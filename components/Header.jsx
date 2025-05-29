"use client";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import { CiMenuFries } from "react-icons/ci";
import DownloadButton from "@/components/DownloadButton";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

import NavLinks from "@/components/NavLinks";

const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* logo */}
          <Logo />
          {/* nav mobile - (Sheet Component)*/}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-secondary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
              <div>
                <div className="px-2 py-3 mb-16">
                  <DownloadButton
                    fileUrl="/assets/Idioma_CV.png"
                    fileName="Idioma_CV.png"
                    buttonText="Download CV"
                  />
                </div>
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="bg-tertiary text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer "
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
