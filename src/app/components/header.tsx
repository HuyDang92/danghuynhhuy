"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggleDarkMode";
import { Link } from "react-scroll";

const navItems = [
   { name: "Home", offset: -90 },
   { name: "About", offset: -230 },
   { name: "Experience", offset: 0 },
   { name: "Skills", offset: -80 },
   { name: "Projects", offset: -100 },
   { name: "Contact", offset: 0 },
];

export default function Header() {
   return (
      <header className="flex justify-center sticky top-0 z-20">
         <div className="p-3 rounded-full  h-18 w-[1200px] shadow-cs_shadow flex items-center justify-between mt-5 backdrop-blur-sm bg-[#693B93]/30">
            <div className="flex items-center">
               <div className="border-r border-[#ccc] px-5">
                  <img src="/logo.svg" alt="logo" className="h-7" />
               </div>

               <ul className="px-5 flex items-center gap-10">
                  {navItems.map((item, index) => (
                     <Link
                        activeClass="active"
                        to={item.name}
                        spy={true}
                        smooth={true}
                        offset={item.offset}
                        duration={500}
                        className="cursor-pointer hover:border-b-2 hover:text-cs_purple hover:border-cs_purple py-1 transition-all"
                        key={index}
                     >
                        {item.name}
                     </Link>
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
