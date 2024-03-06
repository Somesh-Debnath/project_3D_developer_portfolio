import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MuiModal from '@mui/material/Modal'
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { videos, reels } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Routes, useNavigate, Route } from "react-router-dom";
import ReactPlayer from "react-player";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  url,
  source_code_link,
  video,
  reel
}) => {

  const [showModal, setShowModal] = React.useState(false);
  const handleClose = () => setShowModal(false);
  console.log("video", video)
  console.log("reel", reel)
  return (
    <>

      <div className= {`flex flex-wrap flex-row  sm:w-[300px] h-[230px] hover:cursor-pointer justify-center items-center `}>
        <div className='relative w-full h-full flex-auto '
        onClick={()=>setShowModal(true)}>
            <img
              src={image}
              alt='project_image'
              className='w-[85%] h-full object-contain transform hover:scale-110 transition duration-500 cubic-bezier(0.250, 0.450, 0.450, 0.950) overflow-hidden '
            />
          </div>
      </div>
      <MuiModal 
           open={showModal}
            onClose={handleClose}
            className="flex items-center justify-center align-middle
            bg-[#000000] "
            >
              <div className="flex flex-col items-center  justify-center md:flex-row px-3 bg-black max-w-5xl">
                <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#000000] hover:bg-[#020101]"
          onClick={handleClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
        </button>

        <button
          className="modalButton absolute left-9 top-5 !z-40 h-9 w-9 border-none bg-[#000000] hover:bg-[#000000]"
          onClick={handleClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

        </button>
        {video ? <ReactPlayer url={url} controls={true} width="100vh" height="90vh"
          /> : reel ? <video src={url} controls={true} width="100%" height="100%" /> : null}     
              </div>    
            </MuiModal>
    </>

  );
};

const Works = () => {

  const [displaySection, setDisplaySection] = React.useState("videos");

    useEffect(() => {

      
    }, [displaySection]);

  const navigate = useNavigate();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. 
        </motion.p>
      </div>

      <div className="flex gap-7 items-center justify-center mt-8 ">
        <button className= {` ${ displaySection === "videos" ? "text-white" : "text-secondary" } bg-[#050816] hover:text-[#ffffff] font-bold text-[18px] rounded-[20px] mr-4 mb-[-5]`}
        onClick={()=>setDisplaySection("videos")}>
          Videos 
        </button>
        <button className= {` ${ displaySection === "reels" ? "text-white" : "text-secondary" } bg-[#050816] hover:text-[#ffffff] font-bold text-[18px] rounded-[20px] mr-4 mb-[-5]`}
        onClick={()=>setDisplaySection("reels")}>
          Reels
        </button>

      </div>

      
        <div className='mt-20 flex mx-4 sm:ml-0 flex-wrap gap-3 justify-center'>
          { displaySection === "videos" ? videos.map((video, index) => (
            <ProjectCard key={`video-${index}`} index={index} {...video} />
            
          )) : reels.map((reel, index) => (
            <ProjectCard key={`reel-${index}`} index={index} {...reel} />
          ))}
        </div>
         
    </>
  );
};

export default SectionWrapper(Works, "");
