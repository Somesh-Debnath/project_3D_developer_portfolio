import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const phoneNumber= "+919674427561"
    const handleClick = () => {
      window.open(`tel:${phoneNumber}`);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Somesh",
          from_email: form.email,
          to_email: "debnathsomesh1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
      <div className="flex sm:gap-8 gap-3 items-center justify-center ">
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Connect with me on  
          </p>
          
          <div className='flex justify-around mt-3 gap-2 sm:gap-4'>
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
            <a href='mailto:shrijitchowdhuryofficial@gmail.com
            ' target='_blank'>
              <div className='w-8 h-8 rounded-full bg-[#915EFF] flex justify-center items-center'>
                <img
                  src='/icons/email.svg'
                  alt='email'
                  className='w-4 h-4'
                />
              </div>
              </a>
          </div>
          </div>
  );
};

export default SectionWrapper(Contact, "contact");
