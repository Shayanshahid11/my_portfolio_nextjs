"use client";

import About from "@/components/About";

import Hero from "@/components/Hero";
import AOS from "aos"

import "aos/dist/aos.css";

import Projects from "@/components/Projects";



import Skills from "@/components/Skills";
import { useEffect } from "react";
import Contact from "@/components/Contact";



export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
   <main>
    <Hero/>
     <Projects/>
     <Skills />
     <Contact/>
     <About/>
   </main>
  )
}
