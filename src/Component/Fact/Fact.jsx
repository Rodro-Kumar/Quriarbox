import React from "react";
import Flex from "../Common/Flex";
import FactContent from "../Common/FactContent";
import Fact1 from "../../assets/1.png";
import Fact2 from "../../assets/2.png";
import Fact3 from "../../assets/3.png";
import Fact4 from "../../assets/4.png";
import Fact5 from "../../assets/5.png";

const Fact = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="text-center pb-40">
            <Flex className={"justify-between"}>
              <FactContent
                className={""}
                img={Fact1}
                count="26+"
                factTitle="Awards won"
              />
              <FactContent
                className={""}
                img={Fact2}
                count="65+"
                factTitle="States covered"
              />
              <FactContent
                className={""}
                img={Fact3}
                count="689K+"
                factTitle="Happy clients"
              />
              <FactContent
                className={""}
                img={Fact4}
                count="130M+"
                factTitle="Goods delivered"
              />
              <FactContent
                className={""}
                img={Fact5}
                count="130M+"
                factTitle="Business hours"
              />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
