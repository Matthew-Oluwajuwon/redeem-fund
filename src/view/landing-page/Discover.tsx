/* eslint-disable no-useless-concat */
import React from "react";
import { Link } from "react-router-dom";
import { DiscoverCard } from "./DiscoverCard";
import Rect1 from "../../images/Rectangle 145.svg";
import Rect2 from "../../images/Rectangle 152.svg";
import Rect3 from "../../images/Rectangle 154.svg";
import Rect4 from "../../images/Rectangle 153.svg";
import C1 from "../../images/c1.png";
import C2 from "../../images/c2.png";
import C3 from "../../images/c3.png";
import C4 from "../../images/c4.png";

export const Discover: React.FC = () => {
  return (
    <div>
      <h1 className="text-[3rem] text-[#0A2342] text-center font-[poppinsBold]">
        Discover
      </h1>
      <p className="text-center text-[2rem] font-[poppinsMedium] my-5 mb-10">
        A dream you dream alone is only a dream till you fund it
      </p>
      <span className="flex w-full justify-between text-[1.1rem] font-[poppinsMedium]">
        <p>Successful campaign</p>
        <Link to={"discover"}>See all</Link>
      </span>
      <div className="flex w-full py-5 justify-between gap-10">
        <DiscoverCard
          flag={Rect1}
          category={"Course"}
          percentage={"100%"}
          price={"$500"}
          image={C1}
          title={"Raising Funds for a graphic design in skillshare"}
        />
        <DiscoverCard
          flag={Rect2}
          category={"Gadget"}
          percentage={"100%"}
          price={"$1000"}
          image={C2}
          title={"Raising Funds for a 2020\n" + "Apple macbook pro "}
        />
        <DiscoverCard
          flag={Rect3}
          category={"Course"}
          percentage={"100%"}
          price={"$200"}
          image={C3}
          title={"Raising Funds for a product design in udemy"}
        />
        <DiscoverCard
          flag={Rect4}
          category={"Course"}
          percentage={"100%"}
          price={"$200"}
          image={C4}
          title={"Raising Funds for a product design in Coursera "}
        />
      </div>
    </div>
  );
};
