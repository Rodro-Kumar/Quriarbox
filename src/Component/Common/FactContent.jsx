import React from "react";

const FactContent = ({ className, img, count, factTitle }) => {
  return (
    <>
      <div className={className}>
        <img src={img} alt={img} className="ml-auto mr-auto" />
        <h5 className="text-[39px] text-orangeColor font-Oxanium font-extrabold pt-[28px] pb-[6px]  ">
          {count ? count : "26+"}
        </h5>
        <p className="text-[#464558] text-xl font-Raleway font-bold pt-[6px]">
          {factTitle ? factTitle : "Happy clients"}
        </p>
      </div>
    </>
  );
};

export default FactContent;
