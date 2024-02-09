import React from "react";
import "../Service/Service.css";
import Title from "../Common/Title";
import Flex from "../Common/Flex";
import Card from "../Common/Card";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";

const Service = () => {
  return (
    <>
      <div className="pb-44">
        <div className="container">
          <div>
            <Title
              className=" justify-end flex-col pb-[86px]"
              heading={"SERVICES"}
              subtitle={"Our services for you"}
            />
          </div>
          <div>
            <Flex className={"gap-x-7"}>
              <Card
                className={
                  " card bg-[#FFF] px-[56px] py-[50px] w-[402px] rounded-2xl   cursor-pointer   transition-all hover:shadow-navshadow"
                }
                img={service1}
              />
              <Card
                className={
                  "card bg-[#FFF] px-[56px] py-[50px] w-[402px] rounded-2xl   cursor-pointer  transition-all hover:shadow-navshadow "
                }
                img={service2}
                cardHeading="Statewide Services"
                cardDescription="Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours."
              />
              <Card
                className={
                  "card bg-[#FFF] px-[56px] py-[50px] w-[402px] rounded-2xl    cursor-pointer  transition-all hover:shadow-navshadow"
                }
                img={Service3}
                cardHeading="Personal Services"
                cardDescription="You can trust us to safely deliver your most sensitive documents to the specific area in a short time."
              />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
