import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import { GoogleGeminiEffectDemo } from "@/app/components/effectScroll";
import Experience from "@/app/components/experience";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Home from "@/app/components/home";
import Projects from "@/app/components/projects";
import Skills from "@/app/components/skills";

export default function Layout() {
   return (
      <div className="">
         <Header />
         <main>
            <Home />
            <About />
            {/* <Experience /> */}
            <Skills />
            <Projects />
            <Contact />
         </main>
         <Footer />
      </div>
   );
}
