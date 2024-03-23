"use client";

import { GlobeDemo } from "@/app/components/globeDemo";
import Icon from "@/components/ui/Icon";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
   return (
      <div className="flex justify-center h-screen">
         <div className="p-3 rounded-xl w-[1100px] flex justify-between">
            <div>
               <div className="flex gap-5 pt-36">
                  <div className="relative">
                     <img src="/Arrow.png" className="absolute -top-6 -right-10" alt="" />
                     <img src="/me.png" alt="" className="w-52" />
                  </div>
                  <div className="">
                     <p>
                        Hello! I Am <span className="text-cs_purple">Dang Huynh Huy</span>
                     </p>
                     <div className="pt-10">
                        <span className="text-sm">A Designer who</span> <br />
                        <span className="text-[35px] relative">
                           Judges a book <br /> by its
                           <span className="text-cs_purple"> cover</span> ...
                           <img
                              src="/Ellipse.png"
                              alt=""
                              className="absolute bottom-1 right-2 w-36"
                           />
                        </span>
                        <br />
                        <span className="text-[10px]">
                           Because if the cover does not impress you what else can?
                        </span>
                        <br />
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-10 pt-20">
                  <div className="flex items-center gap-5 px-5 pe-10 border-r-2 border-[#ccc]">
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
                  <HoverBorderGradient
                     containerClassName="rounded-full"
                     as="button"
                     className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                     {/* <AceternityLogo /> */}
                     <span>Contact me</span>
                  </HoverBorderGradient>
               </div>
            </div>
            {/* <GlobeDemo /> */}
         </div>
      </div>
   );
}
