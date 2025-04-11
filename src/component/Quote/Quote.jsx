import React from "react";

const Quote = ({ QuoteData }) => {
  return (
    <div  >
      {QuoteData.map((ele) => {
        return (
          <>
            <div key={ele.id} className="bg-[#1F2939]  p-10 text-center rounded-2xl w-[80%] h-full m-auto my-6 ">
              <h3 className="text-3xl text-white">{ele.quote}</h3>
              <p className="my-6 font-light text- text=[#684C37]"> Author : - {ele.author}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Quote;
