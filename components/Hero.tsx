import { WordsGenerateEffect } from "./ui/WordsEffectGenerator";
import { Spotlight } from "./ui/Spotlight";
import { MagicButton } from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-0 pt-36">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex justify-center relative z-10 my-20'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic Web Programer</h2>
          <WordsGenerateEffect className=" text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Today’s Ideas into Tomorrow’s Future"/>
          <p className='text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Lyusi Divakov, a Software Developer based in Bulgaria
          </p>
          <a href="#about"> <MagicButton title="Show more about me" icon={<FaLocationArrow />} position="right"/> </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
