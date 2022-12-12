import React from "react";
import Logo from "../../images/RedeemFund.png";

interface HeaderProps {
  button?: any;
  menu?: any;
}

export const Header: React.FC<HeaderProps> = (props: any) => {
  return (
    <div className="w-full bg-[#0A2342] flex justify-between items-center text-white h-[4rem] py-3 px-20">
      <img onClick={() => window.location.href = '/'} src={Logo} alt={"logo"} className="h-5 cursor-pointer" />
      <div>{props.menu}</div>
      {props.button}
    </div>
  );
};
