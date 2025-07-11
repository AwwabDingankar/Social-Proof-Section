import React from "react";

function Header() {
  return (
    <div className="my-10 justify-center items-center text-center md:w-97 md:text-left flex flex-col  md:gap-y-4">
      <div className="font-bold md:pr-25 text-4xl md:font-extrabold md:text-4xl text-[hsl(300_43%_22%)]">
        10,000+ of our users love our products.
      </div>
      <div className="mt-5 md:mt-2 text-[15px] font-semibold md:font-medium text-[hsl(303_10%_53%)] ">
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </div>
    </div>
  );
}

export default Header;
