"use client";

import { useEffect } from "react";
import { createBg } from "./three";

export default function Home() {
  useEffect(() => {
    createBg();
  }, []);
  return (
    <div className="absolute">
      <h1 className="text-cl-purple-100">Hello, Cosmic Library!</h1>
    </div>
  );
}
