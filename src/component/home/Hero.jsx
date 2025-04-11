import React from "react";
import home from "../../../public/home.png";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="flex flex-col items-start justify-center h-full p-8 text-white">
        <h1 className="text-5xl font-extrabold text-amber-300 ml-24">
          Let us find your
        </h1>
        <h1 className="text-5xl font-extrabold mb-4 pl-32">Forever Food.</h1>
        <p className="w-[40%] ml-6 text-black font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          reiciendis animi dolorem illo officia quasi, distinctio rerum!
        </p>
        <div className="flex ml-12 mt-5">
          <button className="text-black text-lg px-6 py-4 bg-amber-50 rounded-4xl">
            Search Now
          </button>
          <button className="text-amber-50 text-lg px-6 py-4 bg-black rounded-4xl ml-4">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
