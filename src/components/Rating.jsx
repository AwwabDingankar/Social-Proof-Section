import React from "react";
import starIcon from "../assets/icon-star.svg";

function Rating() {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <div className="flex items-center bg-[hsl(300_24%_96%)] max-w-sm h-10 p-4 gap-10 rounded-lg">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <div className="font-semibold text-[hsl(300_43%_22%)]">
          Rated 5 Stars in Reviews
        </div>
      </div>
      <div className="flex items-center bg-[hsl(300_24%_96%)] max-w-sm h-10 p-4 ml-10 gap-10 rounded-lg ">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <div className=" font-semibold text-[hsl(300_43%_22%)]">
          Rated 5 Stars in Report Guru
        </div>
      </div>
      <div className="flex items-center bg-[hsl(300_24%_96%)] max-w-sm h-10 p-4 ml-24 gap-10 rounded-lg ">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <div className="font-semibold text-[hsl(300_43%_22%)]">
          Rated 5 Stars in BestTech
        </div>
      </div>
    </div>
  );
}

export default Rating;
