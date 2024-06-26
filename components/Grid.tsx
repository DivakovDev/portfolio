"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "framer-motion";
import { WordsGenerateEffect } from "./ui/WordsEffectGenerator";

const Grid = () => {
  return (
    <section id="about" className='mt-0'>
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
          words="About"
        />
      </motion.h1>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
