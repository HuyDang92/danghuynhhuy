"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const words = `I am a front-end developer with 1 year of experience in web development. My strengths lie in programming languages such as JavaScript, TypeScript and ReactJs library.
With a strong passion for coding and digital product creation, my goal is to gain practical experience and enhance my skills in frontend technologies.`;

export default function About() {
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <div id="About" className="w-[1200px] mx-auto h-[70vh] mt-20">
         <h1 data-aos="fade-down" className="text-4xl font-extrabold mb-16 text-center relative">
            About me{" "}
            <span className="absolute h-[3px] rounded-full w-[100px] bottom-[-10px]  bg-[#ccc] -translate-x-1/2 left-1/2"></span>
         </h1>

         <div className=" flex gap-10 items-center">
            <div data-aos="zoom-in">
               <Avatar className="size-64">
                  <AvatarImage src="/avt.jpg" className="object-cover" />
                  <AvatarFallback>HUY</AvatarFallback>
               </Avatar>
            </div>
            <div data-aos="fade-left" className="space-y-5">
               <p className="text-3xl mb-10">Hi! I'm Dang Huynh Huy, 21 years old.</p>
               <TextGenerateEffect className="font-medium" words={words} />
               <Button className="rounded-full">Contact me ❤</Button>
            </div>
         </div>
      </div>
   );
}
