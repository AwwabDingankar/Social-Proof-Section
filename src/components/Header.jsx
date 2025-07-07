import React from "react";

function Header() {
  return (
    <div className="max-w-xs flex flex-col gap-y-4">
      <div className="font-extrabold text-4xl w-80 text-[hsl(300_43%_22%)]">
        10,000+ of our users love our products.
      </div>
      <div className="text-sm text-[hsl(303_10%_53%)] w-90">
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </div>
    </div>
  );
}

export default Header;
