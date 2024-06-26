'use client';

import { motion } from "framer-motion";
import { WordsGenerateEffect } from "./ui/WordsEffectGenerator";
import {Cards} from "./ui/Cards"

const SkillsSection = () => {
return (
    <div className='py-20'>
        <motion.h1
      className='mx-auto w-48 flex justify-center'
        initial={{ y: 300, opacity:0 }}
        whileInView={{
          y: 50,
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8
          }
        }}
        whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <WordsGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Skills"
        />
      </motion.h1>
        <div className='flex flex-col items-center justify-center p-4 gap-16 mt-10'>
            <Cards/>
        </div>
    </div>
);
}

export default SkillsSection;