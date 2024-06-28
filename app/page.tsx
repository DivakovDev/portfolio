import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

 const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Skills/>
        <Footer/>
      </div>
    </main>
  );
}

export default Home;
