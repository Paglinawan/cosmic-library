"use client";

import { useEffect } from "react";
import { createBg } from "./three";
import Logo from "./Svg/LogoAnimated";

export default function Home() {
  useEffect(() => {
    createBg();
  }, []);
  return (
    <div className="fixed left-4 top-4 z-10">
      <div className="w-16 h-16">
        <Logo />
      </div>
    </div>
  );
}
