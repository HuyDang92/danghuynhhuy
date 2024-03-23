import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const words = `I am a front-end developer with 1 year of experience in web development. My strengths lie in programming languages such as JavaScript, TypeScript and ReactJs library.
With a strong passion for coding and digital product creation, my goal is to gain practical experience and enhance my skills in frontend technologies.`;

export default function About() {
   return (
      <div className="w-[1100px] mx-auto flex gap-10 h-[70vh] mt-20">
         <Avatar className="size-60">
            <AvatarImage src="/avt.jpg" className="object-cover" />
            <AvatarFallback>HUY</AvatarFallback>
         </Avatar>
         <div>
            <p className="text-4xl mb-10">Hi! I'm a Front End Developer </p>
            <TextGenerateEffect className="" words={words} />
         </div>
      </div>
   );
}
