import React from "react";
import logo from "../../public/logo.png";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-[#111827] text-white h-18 px-6 font-serif fixed w-full z-100">
      <div className="flex items-center px-12 gap-2">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="text-xl font-bold">GeekFoods</h1>
      </div>

      <div>
        <ul className="flex gap-6" >
          <li><a href="#" className="text-blue-800">Home</a></li>
          <li><a href="#" className=" hover:text-blue-700">Quote</a></li>
          <li><a href="#" className=" hover:text-blue-700">Restaurants</a></li>
          <li><a href="#" className=" hover:text-blue-700">Foods</a></li>
          <li><a href="#" className=" hover:text-blue-700">Contacts</a></li>
        </ul>
      </div>

      <div className="pr-8">
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">Get Started</button>
      </div>
    </nav>
  );
};

export default Nav;
