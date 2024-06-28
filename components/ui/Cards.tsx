"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CardsEffect } from "@/components/ui/CardsEffect";
import { cn } from "@/utils/cn";

export function Cards() {
  return (
    <>
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center w-full gap-4">
        <Card
          className="bg-black-25"
          title="Organized"
          icon={<AceternityIcon />}
          description="I like everything organized to manage my time and complete all my tasks."
        >
          <CardsEffect animationSpeed={3} containerClassName="bg-emerald-900" />
        </Card>
        <Card
          className="bg-black-25"
          title="Ambitious"
          icon={<AceternityIcon />}
          description="I am ambitious because I have big dreams and I struggle every day to get closer to them."
        >
          <CardsEffect
            animationSpeed={3}
            containerClassName="bg-black-100"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          className="bg-black-25"
          title="Fast Learner"
          icon={<AceternityIcon />}
          description="I learn quickly because I've frequently changed where I work and study."
        >
          <CardsEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      <div className="pt-0 mb-20 flex flex-col md:flex-row items-center justify-center w-full gap-4">
        <Card
          className="bg-black-25"
          title="Motivated"
          icon={<AceternityIcon />}
          description="I am motivated because I know what I want and what I can do."
        >
          <CardsEffect
            animationSpeed={3}
            containerClassName="bg-black-100"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          className="bg-black-25"
          title="Problem Solving"
          icon={<AceternityIcon />}
          description="I developed problem-solving skills at 14 when I moved to a big town to study."
        >
          <CardsEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          className="bg-black-25"
          title="Adaptive"
          icon={<AceternityIcon />}
          description="I am adaptable and I learned this quality when I started living alone."
        >
          <CardsEffect animationSpeed={3} containerClassName="bg-emerald-900" />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  description,
  children,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto relative h-[16rem] lg:h-[30rem]",
        className
      )}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2
          className="text-md px-5 opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
