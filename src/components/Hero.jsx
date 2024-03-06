import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    const phoneNumber= "+919674427561"
    const handleClick = () => {
      window.open(`tel:${phoneNumber}`);
    
  }
  return (
    <section className={`relative w-full h-screen sm:mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  
        max-w-7xl mx-12 m:mx-32 ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col  items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shrijit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I edit videos, create content
          </p>
          <div className="flex gap-3">
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Connect me on  
          </p>
          <div className='flex gap-3 mt-3'>
            <a href='https://www.instagram.com/shrijitchowdhury/' target='_blank'>
              <div className='w-8 h-8 rounded-full bg-[#915EFF] flex justify-center items-center'>
                <img
                  src='/icons/instagram.svg'
                  alt='instagram'
                  className='w-4 h-4'
                />
              </div>
            </a>
            <a href='https://www.youtube.com/@cinemorphproductions' target='_blank'>
              <div className='w-8 h-8 rounded-full bg-[#915EFF] flex justify-center items-center'>
                <img
                  src='/icons/youtube.svg'
                  alt='youtube'
                  className='w-4 h-4'
                />
              </div>
            </a>
            <div className='w-8 h-8 rounded-full bg-[#915EFF] flex justify-center items-center cursor-pointer'
            onClick={handleClick}>
              <img
                src='/icons/phone.svg'
                alt='call'
                className='w-4 h-4'
              />
            </div>
          </div>
          </div>
         
        </div>
      </div>

      

      <div className='absolute bottom-40 sm:xs:bottom-10  w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
