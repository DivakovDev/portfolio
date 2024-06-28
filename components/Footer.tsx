import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "./ui/Button";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out me today and let&apos;s discuss how I can help you reach
          your goals.
        </p>
        <a href="divakovwork@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 DivakovDev
        </p>
        <div className='flex items-center md:gap-3 gap-6 mt-5 sm:mt-0'>
            {socialMedia.map((social) =>(
                <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <img src={social.img} alt={social.id} className='w-5 h-5'/>
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};
