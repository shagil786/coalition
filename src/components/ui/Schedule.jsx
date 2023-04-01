import React from "react";

export const Schedule = () => {
  const dates = [
    "25 Nov 2016",
    "Vestibulum viverra",
    "28 Nov 2016",
    "Vestibulum viverra",
    "18 Dic 2016",
    "Vestibulum viverra",
    "7 Jan 2017",
    "Vestibulum viverra",
  ];
  return (
    <div className="bg-white mx-2 sm:ml-60 my-20 opacity-80 w-96 h-60 px-8">
      <h4 className="font-Oswald font-black text-4xl text-[#414f6b]">
        SCHEDULE
      </h4>
      <div className="grid grid-rows-8 grid-cols-2 pt-8 w-full">
        {dates.map((dates, index) => (
          <span  key={index} className="py-1">{dates}</span>
        ))}
      </div>
    </div>
  );
};
