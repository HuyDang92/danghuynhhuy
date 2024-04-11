"use client";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import { useEffect } from "react";
import Icon from "@/components/ui/Icon";

export default function Projects() {
   useEffect(() => {
      AOS.init();
   }, []);

   const check = [0, 1, 2];

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
   ];
   return (
      <div id="Projects" className="w-[1200px] mx-auto min-h-[80vh] mt-60">
         <h1 data-aos="fade-down" className="text-4xl font-extrabold mb-40 text-center relative">
            Projects
            <span className="absolute h-[3px] rounded-full w-[100px] bottom-[-10px]  bg-[#ccc] -translate-x-1/2 left-1/2"></span>
         </h1>
         {check.map((item, index) =>
            index % 2 === 0 ? (
               <div className="flex relative mb-60">
                  <div data-aos="fade-right" className="w-[50%]">
                     <h4 className="text-cs_purple">Featured Project</h4>
                     <h1 className="text-3xl">Example Project</h1>
                     <div className="backdrop-blur-sm bg-[#693B93]/20 rounded-xl p-4 pe-10 mt-5 shadow-cs_shadow">
                        A web app for visualizing personalized Spotify data. View your top artists,
                        top tracks, recently played tracks, and detailed audio information about
                        each track. Create and save new playlists of recommended tracks based on
                        your existing playlists and more.
                     </div>
                     <div className="flex  gap-3 relative z-10 mt-5">
                        {data.map((item, index) => (
                           <div className="bg-[#251C31] rounded-full p-2">
                              <img src={item.thumbnail} alt="" />
                           </div>
                        ))}
                     </div>
                     <div className="flex gap-5 mt-5">
                        <Button className="rounded-full bg-cs_purple text-white hover:text-cs_purple border hover:border-cs_purple">
                           View Project
                           <Icon name="link-outline" className="ps-2 text-xl" />
                        </Button>
                        <Button className="rounded-full bg-white text-cs_purple hover:text-white border hover:bg-cs_purple border-cs_purple">
                           View Source
                           <Icon name="logo-github" className="ps-2 text-xl" />
                        </Button>
                     </div>
                  </div>
                  <div
                     data-aos="fade-left"
                     className="p-1 pt-4 ps-6 backdrop-blur-sm bg-[#693B93]/80 absolute w-[55%] z-[-1] -right-0 rounded-xl"
                  >
                     <img src="/project1.png" alt="" className="rounded-xl" />
                  </div>
                  <img
                     data-aos="fade-left"
                     src="/shadowBig.svg"
                     alt=""
                     className="z-[-2] absolute w-[65%] right-20 top-[-7rem]"
                  />
               </div>
            ) : (
               <div className="flex flex-row-reverse relative mb-60">
                  <div>
                     <div
                        data-aos="fade-right"
                        className="ps-1 pt-4 pe-6 backdrop-blur-sm bg-[#693B93]/80 absolute w-[55%] z-[-1] -left-0 rounded-xl"
                     >
                        <img src="/project1.png" alt="" className="rounded-xl" />
                     </div>
                     <img
                        data-aos="fade-left"
                        src="/shadowBig.svg"
                        alt=""
                        className="z-[-2] absolute w-[65%] left-20 top-[-7rem]"
                     />
                  </div>
                  <div data-aos="fade-left" className="w-[50%] ">
                     <h4 className="text-cs_purple text-end">Featured Project</h4>
                     <h1 className="text-3xl text-end">Example Project</h1>
                     <div className="backdrop-blur-sm bg-[#693B93]/20 rounded-xl p-4 ps-10 mt-5 shadow-cs_shadow">
                        A web app for visualizing personalized Spotify data. View your top artists,
                        top tracks, recently played tracks, and detailed audio information about
                        each track. Create and save new playlists of recommended tracks based on
                        your existing playlists and more.
                     </div>
                     <div className="flex  gap-3 relative justify-end z-10 mt-5">
                        {data.map((item, index) => (
                           <div className="bg-[#251C31] rounded-full p-2">
                              <img src={item.thumbnail} alt="" />
                           </div>
                        ))}
                     </div>
                     <div className="flex gap-5 mt-5 justify-end">
                        <Button className="rounded-full bg-cs_purple text-white hover:text-cs_purple border hover:border-cs_purple">
                           View Project
                           <Icon name="link-outline" className="ps-2 text-xl" />
                        </Button>
                        <Button className="rounded-full bg-white text-cs_purple hover:text-white border hover:bg-cs_purple border-cs_purple">
                           View Source
                           <Icon name="logo-github" className="ps-2 text-xl" />
                        </Button>
                     </div>
                  </div>
               </div>
            )
         )}
      </div>
   );
}
