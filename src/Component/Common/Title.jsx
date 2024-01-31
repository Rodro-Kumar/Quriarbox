import React from "react";
import Flex from "../Common/Flex";

const Title = ({ className, heading, subtitle }) => {
  return (
    <>
      <Flex className={className}>
        <h3 className="text-orangeColor font-Oxanium text-2xl font-bold">
          {heading ? heading : "SERVICES"}
        </h3>
        <p className="text-[#11111D] font-Raleway text-[39px] font-extrabold">
          {subtitle ? subtitle : "Our services for you"}
        </p>
      </Flex>
    </>
  );
};

export default Title;
