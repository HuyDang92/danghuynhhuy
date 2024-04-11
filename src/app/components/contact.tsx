"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MyForm from "@/app/components/form";
import Icon from "@/components/ui/Icon";
export default function Contact() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="relative min-h-[75vh] mt-28 w-[1200px] mb-10 mx-auto" id="Contact">
         <div className="flex gap-5 justify-center">
            <img
               data-aos="fade-right"
               className="rounded-2xl object-cover w-[40%]"
               src="/bg.jpg"
               alt=""
            />
            <div data-aos="fade-left" className="px-5 lg:px-0 mt-5 lg:mt-0 w-[40%]">
               <h1 className="text-3xl font-bold mb-2 dark:text-gray-50">GET IN TOUCH</h1>
               <MyForm />
            </div>
         </div>
         <div className="flex justify-between px-5 lg:px-0 py-14 lg:py-10 mt-10">
            <div className="h-fit">
               <img src="/logo.svg" alt="" />
            </div>
            <div className="flex items-center gap-5 px-5 pe-10">
               <a href="" target="_blank">
                  <Icon className="text-3xl" name="logo-facebook" />
               </a>
               <a href="" target="_blank">
                  <Icon className="text-3xl" name="logo-github" />
               </a>
               <a href="" target="_blank">
                  <Icon className="text-3xl" name="logo-linkedin" />
               </a>
            </div>
         </div>
         <p className="text-center text-gray-400 pb-4">
            Copyright@2024 - DangHuynhHuy - danghuynhhuy776@gmail.com
         </p>
      </div>
   );
}
