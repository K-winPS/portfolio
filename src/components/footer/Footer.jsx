import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"
          target="_blank"
            href="https://twitter.com/Kwinofficial1"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <AiFillTwitterCircle className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>twitter</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"
          target="_blank"
            href="https://in.linkedin.com/in/kevin-savaliya-81b0971b6"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"
          target="_blank"
            href="https://www.instagram.com/k.win_official/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>{new Date().getFullYear()} Kevin S. </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
