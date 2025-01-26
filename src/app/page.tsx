"use client";

import { useEffect } from "react";
import { createBg } from "./three";

export default function Home() {
  useEffect(() => {
    createBg();
  }, []);
  return <div className="fixed left-4 top-4 z-10"></div>;
}
