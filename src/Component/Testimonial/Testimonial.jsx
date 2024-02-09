import React from "react";
import "../Testimonial/Testi.css";
import Title from "../Common/Title";
import quotes from "../../assets/Quote.png";
import Flex from "../Common/Flex";
import Star from "../../assets/stars.png";
import client from "../../assets/Avatar.png";

const Testimonial = () => {
  return (
    <>
      <div className="pb-64">
        <div className="container">
          <div className="testi pb-[88px]">
            <Title
              className={"justify-center flex-col title"}
              heading={"TESTIMONIAL"}
              subtitle={"Our Awesome Clients"}
            />
            <img src={quotes} alt={quotes} className="testiImg" />
          </div>

          <div className="py-[39px] bg-[#EEEDED] rounded-xl px-[40px] w-[878px] m-auto">
            <h4 className="text-orangeColor font-Raleway text-2xl font-bold pb-3">
              Fantastic service!
            </h4>
            <p className="text-[#464558] text-base font-Raleway font-normal leading-5 pb-7">
              I purchased a phone from an e-commerce site, and this courier
              service provider assisted me in getting it delivered to my home. I
              received my phone within one day, and I was really satisfied with
              their service when I received it. They are really quick and
              dependable. They give me with the option of real-time delivery
              status, which allows me to track the progress of my goods
              delivery. I get a lot of questions from call center support and
              key account managers. They come highly recommended. Confidently
              say that they are really reliable.
            </p>
            <div>
              <Flex className={"justify-between"}>
                <img src={Star} alt={Star} />
                <div>
                  <Flex className="gap-x-3">
                    <div className="text-end">
                      <h4 className="text-[#222132] font-Raleway text-base font-bold">
                        Yves Tanguy
                      </h4>
                      <p className="text-[#464558] font-Raleway text-base font-normal">
                        Chief Executive, DLF
                      </p>
                    </div>
                    <img src={client} alt={client} />
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
