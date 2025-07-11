import React from "react";
import starIcon from "../assets/icon-star.svg";

function Rating() {
  return (
    <div className="flex flex-col md:mt-18 gap-4">
      <div className="flex flex-col gap-2 h-20 md:flex-row justify-center items-center bg-[hsl(300_24%_96%)] md:max-w-95 md:h-12 md:p-4 md:gap-8 rounded-lg">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <div className="font-bold text-[15px] text-[hsl(300_43%_22%)]">
          Rated 5 Stars in Reviews
        </div>
      </div>
      <div className="flex flex-col gap-2 h-20 md:flex-row justify-center items-center bg-[hsl(300_24%_96%)] md:max-w-95 md:h-12 md:p-4 md:gap-8 md:ml-14 rounded-lg">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <div className=" font-bold text-[15px] text-[hsl(300_43%_22%)]">
          Rated 5 Stars in Report Guru
        </div>
      </div>
      <div className="flex flex-col gap-2 h-20 md:flex-row justify-center items-center bg-[hsl(300_24%_96%)] md:max-w-95 md:h-12 md:p-4 md:gap-8 md:ml-27 rounded-lg ">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <div className="font-bold text-[15px] text-[hsl(300_43%_22%)]">
          Rated 5 Stars in BestTech
        </div>
      </div>
    </div>
  );
}

export default Rating;
