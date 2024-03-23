import About from "@/app/components/about";
import { GoogleGeminiEffectDemo } from "@/app/components/effectScroll";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Home from "@/app/components/home";

export default function Layout() {
   return (
      <>
         <Header />
         <main>
            <Home />
            {/* <GoogleGeminiEffectDemo /> */}
            <About />
         </main>
         <Footer />
      </>
   );
}
