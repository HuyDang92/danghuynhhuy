"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function Skills() {
   useEffect(() => {
      AOS.init();
   }, []);

   const data = [
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
      {
         thumbnail: "/react.svg",
      },
   ];
   return (
      <div
         id="Skills"
         className="w-[1200px] mx-auto h-[80vh] mt-20 flex justify-start items-center flex-col"
      >
         <h1 data-aos="fade-down" className="text-4xl font-extrabold mb-12 text-center relative">
            Skills
            <span className="absolute h-[3px] rounded-full w-[100px] bottom-[-10px]  bg-[#ccc] -translate-x-1/2 left-1/2"></span>
         </h1>

         <div className="flex flex-wrap w-[40%] justify-center gap-3 relative z-10">
            {data.map((item, index) => (
               <div className="bg-[#251C31] rounded-full p-3">
                  <img src={item.thumbnail} alt="" className="hover:scale-110 transition-all"/>
               </div>
            ))}
         </div>
         <img data-aos="zoom-in" src="/art_full.svg" alt="" className="w-[70%] -m-5" />
      </div>
   );
}
