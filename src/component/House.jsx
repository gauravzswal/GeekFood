import React from "react";
import house1 from "../../public/house1.png";

const house = () => {
  return (
    <section className="w-full flex scroll-x-0 pr-12 py-16">
      <div className="bg-white w-[55%] h-screen relative">
        <img src={house1} alt="" className="left-14 top-24 absolute w-[100%]" />
      </div>
      <div className=" bg-[#F3F4F6] w-[55%] h-screen pl-8">
        <div className="w-full h-full p-24 flex justify-center flex-col gap-4  ">
          <h3 className=" font-extrabold text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h3>
          <p className="text-[#4B5563]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <button className="flex-start flex bg-blue-600 w-40 px-4 py-2 items-center justify-center rounded-sm mt-4 text-white">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default house;
