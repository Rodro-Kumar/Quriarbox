import React from "react";
import Flex from "../Common/Flex";
import Title from "../Common/Title";
import Button from "../Common/Button";
import { GrLocation } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Info = () => {
  return (
    <>
      <div className="info pb-[180px]">
        <div className="container">
          <Title
            className={"justify-center flex-col"}
            heading="FIND US"
            subtitle="Access us easily"
          />
          <div className="info_wraper pt-[85px]">
            <Flex className={"gap-x-6"}>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.170254395731!2d90.38000527566659!3d23.74130738912473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1706594556975!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-[700px] h-[400px]"
                ></iframe>
              </div>
              <div className="address bg-white pt-[60px] pl-[88px] pb-[60px] pr-[145px]">
                <h5 className="text-[#464558] font-Raleway text-sm font-bold pb-[38px]">
                  Contact with us
                </h5>
                <p className="flex  text-[#5C5B6C] font-Raleway text-base font-normal pb-[18px]">
                  <GrLocation className="text-[#B17600] text-3xl mr-[15px]" />
                  2277 Lorem Ave, San Diego, CA 22553
                </p>
                <p className="flex  text-[#5C5B6C] font-Raleway text-base font-normal pb-[18px]">
                  <LuClock3 className="text-[#B17600] mt-[2px] text-3xl mr-[19px]" />
                  Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm
                </p>
                <p className="flex items-center text-[#5C5B6C] font-Raleway text-base font-normal pb-[50px]">
                  <MdOutlineEmail className="text-[#B17600] text-3xl mr-[15px]" />
                  info@quriarbox.com
                </p>
                <div className="icon flex gap-x-4">
                  <a
                    href="#"
                    className="text-[#d4d4d4] text-3xl hover:text-orangeColor transition-all"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="#"
                    className="text-[#d4d4d4] text-3xl hover:text-orangeColor transition-all"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-[#d4d4d4] text-3xl hover:text-orangeColor transition-all"
                  >
                    <FaTwitterSquare />
                  </a>
                </div>
              </div>
            </Flex>
          </div>
          <Button
            className={
              "bg-orangeColor text-white font-Oxanium text-xl font-bold flex items-center  ml-auto mr-auto py-5 px-28 rounded-md mt-[55px] hover:bg-orange-700 transition-all"
            }
          >
            <IoMdCall className="mr-3 text-2xl" />
            Call us to delivery 123-456789
          </Button>
        </div>
      </div>
    </>
  );
};

export default Info;
