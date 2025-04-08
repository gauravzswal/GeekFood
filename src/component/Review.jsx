import React from "react";
import girl from "../../public/girlreview.png";

const Review = () => {
  return (
    <section className="flex mx-16 gap-20 flex-wrap">
        
      <div className="w-[25%] ">
        <div className="bg-[#F9FAFB] p-5 rounded-lg  mb-3 shadow-inner">
          <p className="text-[#374177]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </p>
        </div>
        <div className="flex gap-4">
          <img src={girl} alt="" className="w-12 h-12 rounded-[50%]" />
          <div className="flex items-center flex-col justify-center">
            <h1 className="font-bold text-sm">Gladis Lennon</h1>
            <p className="text-sm">Head of SEO</p>
          </div>
        </div>
      </div>

      <div className="w-[25%]  ">
        <div className="bg-[#F9FAFB] p-5 rounded-lg  mb-3 shadow-inner">
          <p className="text-[#374177]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            beatae incidunt perferendis soluta facilis voluptas dicta
            repudiandae quasi asperiores libero, exercitationem molestiae autem
            sapiente dolore nulla non consequatur. Eaque, dolores.
          </p>
        </div>
        <div className="flex gap-4">
          <img src={girl} alt="" className="w-12 h-12 rounded-[50%]" />
          <div className="flex items-center flex-col justify-center">
            <h1 className="font-bold text-sm">Gladis Lennon</h1>
            <p className="text-sm">Head of SEO</p>
          </div>
        </div>
      </div>

      <div className="w-[25%]  ">
        <div className="bg-[#F9FAFB] p-5 rounded-lg  mb-3 shadow-inner">
          <p className="text-[#374177]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
            voluptatum quidem nulla quisquam natus velit provident earum esse,
            odio numquam labore recusandae similique sunt.
          </p>
        </div>
        <div className="flex gap-4">
          <img src={girl} alt="" className="w-12 h-12 rounded-[50%]" />
          <div className="flex items-center flex-col justify-center">
            <h1 className="font-bold text-sm">Gladis Lennon</h1>
            <p className="text-sm">Head of SEO</p>
          </div>
        </div>
      </div>

      <div className="w-[25%]  ">
        <div className="bg-[#F9FAFB] p-5 rounded-lg  mb-3 shadow-inner">
          <p className="text-[#374177]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
            quo deserunt quos expedita minima incidunt sed tempora, a architecto
            consectetur reprehenderit, in repellat voluptatum.
          </p>
        </div>
        <div className="flex gap-4">
          <img src={girl} alt="" className="w-12 h-12 rounded-[50%]" />
          <div className="flex items-center flex-col justify-center">
            <h1 className="font-bold text-sm">Gladis Lennon</h1>
            <p className="text-sm">Head of SEO</p>
          </div>
        </div>
      </div>

      <div className="w-[25%]  ">
        <div className="bg-[#F9FAFB] p-5 rounded-lg  mb-3 shadow-inner">
          <p className="text-[#374177]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloribus eius aut unde, dolores accusantium!
          </p>
        </div>
        <div className="flex gap-4">
          <img src={girl} alt="" className="w-12 h-12 rounded-[50%]" />
          <div className="flex items-center flex-col justify-center">
            <h1 className="font-bold text-sm">Gladis Lennon</h1>
            <p className="text-sm">Head of SEO</p>
          </div>
        </div>
      </div>

      <div className="w-[25%] -bg-conic-180 ">
        <div className="bg-[#F9FAFB] p-5 rounded-lg  mb-3 shadow-inner">
          <p className="text-[#374177]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
            necessitatibus, repudiandae qui dolor minima.
          </p>
        </div>
        <div className="flex gap-4">
          <img src={girl} alt="" className="w-12 h-12 rounded-[50%]" />
          <div className="flex items-center flex-col justify-center">
            <h1 className="font-bold text-sm">Gladis Lennon</h1>
            <p className="text-sm">Head of SEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
