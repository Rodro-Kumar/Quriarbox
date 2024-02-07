import React from "react";
import Flex from "../Common/Flex";
import Button from "../Common/Button";
import footerLogo from "../../assets/footerlogo.png";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#222132]">
        <div className="container">
          <div className="footer_wraper">
            <div className="footer_subscrie py-[84px]">
              <Flex className={"justify-between"}>
                <div className="left">
                  <h4 className="text-[#EEEDED] font-Raleway text-[38px] font-extrabold">
                    Get an update every week
                  </h4>
                  <p className="text-[#C5C5D2] text-base font-Raleway font-normal leading-5 pr-[260px]">
                    We ensure that your product is delivered in the safest
                    possible manner, at the correct location, at the right time.
                  </p>
                </div>
                <div className="right">
                  <p className="text-orangeColor font-Oxanium text-lg font-bold pb-[13px]">
                    SUBSCRIBE TO NEWSLETTER
                  </p>
                  <div className="input flex items-center gap-x-4">
                    <input
                      type="email"
                      placeholder="Enter your mail"
                      className="placeholder:text-[#7B7A8B] placeholder:font-Raleway placeholder:text-base placeholder:font-normal py-[15px] pl-[18px] pr-[177px] rounded-md border-2 border-solid border-[#C5C5D2] bg-transparent text-[#7B7A8B]"
                    />
                    <Button
                      className={
                        "bg-orangeColor text-white font-Oxanium text-xl font-bold py-3 px-5 rounded-md hover:bg-orange-700 transition-all"
                      }
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </div>
        <div className="footer_main bg-[#2F2E41] py-[50px]">
          <div className="container">
            <Flex className={"justify-between"}>
              <div className="footer_logo">
                <img src={footerLogo} alt={footerLogo} />
                <p className="text-[#9291A1] font-Raleway text-base font-semibold pt-[18px] w-[200px]">
                  The most trusted Courier company in your area.
                </p>
              </div>
              <div className="footer_list">
                <Flex className={"gap-x-32"}>
                  <ul>
                    <li className="text-[#EEEDED] text-xl font-Oxanium font-bold pb-[22px]">
                      Other links
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold pb-[7px] hover:text-[#fff] transition-all"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold pb-[7px] hover:text-[#fff] transition-all"
                      >
                        Movers website
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold hover:text-[#fff] transition-all"
                      >
                        Traffic Update
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#EEEDED] text-xl font-Oxanium font-bold pb-[22px]">
                      Services
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold pb-[7px] hover:text-[#fff] transition-all"
                      >
                        Corporate goods
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold pb-[7px] hover:text-[#fff] transition-all"
                      >
                        Artworks
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold hover:text-[#fff] transition-all"
                      >
                        Documents
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-[#EEEDED] text-xl font-Oxanium font-bold pb-[22px]">
                      Customer Care
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold pb-[7px] hover:text-[#fff] transition-all"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold pb-[7px] hover:text-[#fff] transition-all"
                      >
                        Contact US
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#9291A1] font-Raleway text-base font-semibold  hover:text-[#fff] transition-all"
                      >
                        Get Update
                      </a>
                    </li>
                  </ul>
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
        <div className="footer_copyright py-[30px]">
          <div className="container">
            <Flex className={"justify-between"}>
              <p className="text-[13px] text-[#DBDBE9] font-Raleway font-medium">
                All rights Reserved © Your Company, 2021
              </p>
              <p className="text-[13px] font-Raleway text-[#E0DEDE] font-medium">
                Frontend design by{" "}
                <span className="text-orangeColor font-Oxanium font-semibold">
                  Rodro
                </span>
              </p>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
