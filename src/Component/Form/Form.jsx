import React from "react";
import Flex from "../Common/Flex";
import women from "../../assets/women.png";
import Button from "../Common/Button";
import { FaTelegramPlane } from "react-icons/fa";

const Form = () => {
  return (
    <>
      <div className="pb-[200px]">
        <div className="container">
          <div>
            <Flex className={"justify-center gap-x-8"}>
              <div>
                <img src={women} alt={women} />
                <h4 className="text-orangeColor text-2xl font-Oxanium font-bold pt-[13px] pb-[20px]">
                  REQUEST A CALLBACK
                </h4>
                <h5 className="text-[#222132] text-[38px] font-extrabold font-Raleway pb-2 leading-10 w-[400px]">
                  We will contact in the shortest time.
                </h5>

                <p className="text-[#9291A1] font-Raleway text-2xl font-semibold">
                  Monday to Friday, 9am-5pm.
                </p>
              </div>
              <div className="flex-col flex gap-y-4 pt-[60px]">
                <input
                  type="Name"
                  placeholder="Name"
                  className="w-[420px] py-[15px] pl-[18px] bg-transparent border-solid border-2 border-[#C5C5D2] rounded-md placeholder:text-[#9291A1] placeholder:font-Raleway placeholder:text-base placeholder:font-normal"
                />
                <input
                  type="Email"
                  placeholder="Email"
                  className="w-[420px] py-[15px] pl-[18px] bg-transparent border-solid border-2 border-[#C5C5D2] rounded-md placeholder:text-[#9291A1] placeholder:font-Raleway placeholder:text-base placeholder:font-normal"
                />
                <input
                  type="Message"
                  placeholder="Message"
                  className="w-[420px]  pt-[15px] pb-[118px] pl-[18px] bg-transparent border-solid border-2 border-[#C5C5D2] rounded-md placeholder:text-[#9291A1] placeholder:font-Raleway placeholder:text-base placeholder:font-normal text-start inline-block"
                />
                <Button className="bg-orangeColor py-3 px-5 rounded-md font-Oxanium text-white font-bold text-xl flex items-center justify-center gap-x-2 hover:bg-orange-500 transition-all">
                  Send Message
                  <FaTelegramPlane className="text-xl" />
                </Button>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
