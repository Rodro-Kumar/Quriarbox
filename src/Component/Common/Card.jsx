import React from "react";
import Button from "./Button";

const Card = ({ className, img, cardHeading, cardDescription, cardlist }) => {
  return (
    <>
      <div className={className}>
        <picture>
          <img src={img} alt={img} className="ml-auto mr-auto block" />
        </picture>
        <h3 className="text-center font-Raleway text-2xl leading-normal pt-7 font-extrabold">
          {cardHeading ? cardHeading : "Business Services"}
        </h3>
        <p className="font-Raleway text-base font-normal text-[#7B7A8B] leading-6 pt-8 pb-10">
          {cardDescription
            ? cardDescription
            : "We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries."}
        </p>
        <ul className="pb-14 pl-4">
          <li className="list-disc text-[#7B7A8B] font-Raleway text-base font-normal">
            {cardlist ? cardlist : "Corporate goods"}
          </li>
          <li className="list-disc text-[#7B7A8B] font-Raleway text-base font-normal">
            {cardlist ? cardlist : "Corporate goods"}
          </li>
          <li className="list-disc text-[#7B7A8B] font-Raleway text-base font-normal">
            {cardlist ? cardlist : "Corporate goods"}
          </li>
        </ul>
        <Button
          className={
            " w-[100%] font-Oxanium text-xl font-bold text-orangeColor py-3 px-5 rounded-md border-2 border-orangeColor hover:bg-[#F95C19] hover:text-white transition-all"
          }
        >
          Learn more
        </Button>
      </div>
    </>
  );
};

export default Card;
