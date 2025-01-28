"use client";

import { useEffect } from "react";
import { createBg } from "./three";
import Image from "next/image";
import { getBasePath } from "./utils/getBasePath";
import IconFilm from "./assets/icons/IconFilm.svg";

export default function Home() {
  useEffect(() => {
    createBg();
  }, []);
  return (
    <div className="fixed left-4 top-4 z-10">
      <Image
        src={`${getBasePath()}/assets/images/logo.svg`}
        alt="Logo"
        width={64}
        height={64}
      />
      <div className="text-white w-24 h-24">
        <IconFilm classNames="w-full object-contain" />
      </div>
    </div>
  );
}
