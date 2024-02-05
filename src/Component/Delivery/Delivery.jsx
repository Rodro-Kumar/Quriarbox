import React from "react";
import playbtn from "../../assets/play.png";

const Delivery = () => {
  return (
    <>
      <div className="pb-[175px]">
        <div className="container">
          <div className="bg-[url('/src/assets/video.png')] bg-cover bg-no-repeat bg-center justify-center flex flex-col items-center pt-[126px] pb-[168px] px-[452px] text-center rounded-xl cursor-pointer">
            <img src={playbtn} alt={playbtn} />
            <h3 className="font-Oxanium text-orangeColor text-2xl font-bold pt-5 pb-7">
              FASTEST DELIVERY
            </h3>
            <p className="text-base text-[#EEEDED]  font-normal font-Raleway leading-7 ">
              You can get your valuable item in the fastest period of time with
              safety. Because your emergency is our first priority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
