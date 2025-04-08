import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[#F3F4F6] py-14 gap-12">
      <div className="flex text-2xl items-end gap-2 font-bold text-[#0D9488]">
        <GiHamburger className="text-4xl" />
        <h1>GeekFood</h1>
      </div>

      <p className="w-[30%] text-center text-[#6B7887]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>
      <ul className="flex gap-12 text-[#666E8F]">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">History</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>Projects</li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
      <div className="flex gap-8 text-2xl text-[#666E7B]">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaGithub />
        <CiBasketball />
      </div>
    </div>
  );
};

export default Footer;
