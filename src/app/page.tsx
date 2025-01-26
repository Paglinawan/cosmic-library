"use client";

import { useEffect } from "react";
import { createBg } from "./three";
import Logo from "@/app/assets/images/logo.svg";

export default function Home() {
  useEffect(() => {
    createBg();
  }, []);
  return (
    <div className="fixed left-4 top-4 z-10">
      <Logo className="w-16 h-16" />
    </div>
  );
}
