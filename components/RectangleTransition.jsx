"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Rectangle from "./Rectangle";

const RectangleTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-50 flex">
                <Rectangle />   
            </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default RectangleTransition;
