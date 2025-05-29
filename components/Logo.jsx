"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-[20px] font-normal">
      Jimmar
      <span className="text-tertiary text-4xl">.</span>
    </Link>
  );
};

export default Logo;
