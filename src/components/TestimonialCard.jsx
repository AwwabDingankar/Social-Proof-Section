import React from "react";
import colton from "../assets/image-colton.jpg";
import inrene from "../assets/image-irene.jpg";
import anne from "../assets/image-anne.jpg";

function TestimonialCard() {
  return (
    <div className="col-span-2 flex flex gap-8">
      <div className="card bg-[hsl(300_43%_22%)] flex flex-col w-80 h-55 p-8  gap-5 mt-15 rounded-md">
        <div className="user-info flex gap-4 items-center">
          <img className="rounded-full h-10 w-10" src={colton} alt="" />
          <div className="">
            <p className="text-white font-medium text-sm">Colton Smith</p>
            <p className="text-[hsl(333_80%_67%)] font-normal text-sm">
              Verified Buyer
            </p>
          </div>
        </div>
        <div className="text-white text-sm p">
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </div>
      </div>
      <div className="card bg-[hsl(300_43%_22%)] flex flex-col w-80 h-55 p-8  gap-5 mt-20 rounded-md">
        <div className="user-info flex gap-4 items-center">
          <img className="rounded-full h-10 w-10" src={inrene} alt="" />
          <div className="">
            <p className="text-white font-medium text-sm">Irene Roberts </p>
            <p className="text-[hsl(333_80%_67%)] font-normal text-sm">
              Verified Buyer
            </p>
          </div>
        </div>
        <div className="text-white text-sm p">
          "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </div>
      </div>
      <div className="card bg-[hsl(300_43%_22%)] flex flex-col w-80 h-55 p-8  gap-5 mt-25 rounded-md">
        <div className="user-info flex gap-4 items-center">
          <img className="rounded-full h-10 w-10" src={anne} alt="" />
          <div className="">
            <p className="text-white font-medium text-sm">Anne Wallace</p>
            <p className="text-[hsl(333_80%_67%)] font-normal text-sm">
              Verified Buyer
            </p>
          </div>
        </div>
        <div className="text-white text-sm p">
          "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
