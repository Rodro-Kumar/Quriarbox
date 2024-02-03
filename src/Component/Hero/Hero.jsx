import React from "react";
import Flex from "../Common/Flex";
import Button from "../Common/Button";
import { FaArrowRight } from "react-icons/fa";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Flex className={"py-[170px]"}>
            <div className="-max-w-[36%]">
              <h1 className="text-[#261134] font-Raleway text-5xl font-normal leading-[58px]">
                A trusted provider of
                <span className="font-extrabold">courier services.</span>
              </h1>
              <p className="text-[#4D4D4D] font-normal font-Raleway text-xl leading-[24px] pt-4 pb-10 pr-28">
                We deliver your products safely to your home in a reasonable
                time.
              </p>
              <Button className="bg-[#F95C19] text-[20px] font-bold text-white flex items-center py-[12px] px-[20px] rounded-md hover:bg-[#e04300] transition-all">
                Get started <FaArrowRight className="pl-2 text-[25px]" />
              </Button>
            </div>
            <div className="max-w-[64%]">
              <picture>
                <img src={HeroImg} alt={HeroImg} />
              </picture>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Hero;
