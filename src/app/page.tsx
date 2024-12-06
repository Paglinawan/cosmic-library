"use client";

import { useEffect } from "react";
import { createBg } from "./three";

export default function Home() {
  useEffect(() => {
    createBg();
  }, []);
  return <div></div>;
}
