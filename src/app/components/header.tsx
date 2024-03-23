"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggleDarkMode";
import { useEffect, useState } from "react";

const navItems = ["Home", "About", "Skills", "Projects"];
export default function Header() {
   return (
      <header className="flex justify-center sticky top-0 z-20">
         <div className="p-3 rounded-full  h-18 w-[1100px] shadow-cs_shadow border flex items-center justify-between mt-5 backdrop-blur-sm bg-[#fff]/20">
            <div className="flex items-center">
               <div className="border-r border-[#ccc] px-5">
                  <img src="/logo.svg" alt="logo" className="h-7" />
               </div>
               <ul className="px-5 flex items-center gap-10">
                  {navItems.map((item, index) => (
                     <li
                        className="cursor-pointer hover:border-b-2 hover:text-cs_purple hover:border-cs_purple py-1 transition-all"
                        key={index}
                     >
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="flex items-center gap-2">
               <ModeToggle />
               <a href="/MyCV.pdf" download={true}>
                  <Button className="rounded-full">Download CV</Button>
               </a>
            </div>
         </div>
      </header>
   );
}
