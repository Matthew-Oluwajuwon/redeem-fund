import { Select } from 'antd'
import React from 'react'
import { CaretDownOutlined } from "@ant-design/icons";
import Logo from "../../images/RedeemFund.png";
import p1 from "../../images/Vector.svg";
import p2 from "../../images/Vector-1.svg";
import p3 from "../../images/Vector-2.svg";
import p4 from "../../images/Vector-3.svg";

export const Footer: React.FC = () => {
  return (
    <div className='relative bottom-0 left-0 w-full'>
        <div className="w-full h-[20rem] bg-[#0A2342] justify-evenly flex gap-20 text-white px-44 py-20">
          <div className="w-[48%] h-36 flex flex-col">
            <img src={Logo} alt="logo" className="w-[30%] h-[15%]" />
            <Select
              defaultValue={"English (United Kingdom)"}
              size={"large"}
              suffixIcon={<CaretDownOutlined className="text-black" />}
              className="flex items-center text-black text-[3rem] w-[50%] py-10"
            >
              <Select.Option value="">English (U.S.A)</Select.Option>
              <Select.Option value="">Spanish</Select.Option>
              <Select.Option value="">Yoruba</Select.Option>
            </Select>
          </div>
          <div className="w-[48%] flex gap-20 justify-end">
            <span>
              <h2 className="text-[#3EB489]">Our partners</h2>
              <ul className="my-5 leading-10">
                <li>Coursera</li>
                <li>Udemy</li>
                <li>Skillshare</li>
                <li>Udacity</li>
              </ul>
            </span>
            <span>
              <h2 className="text-[#3EB489]">Learn more</h2>
              <ul className="my-5 leading-10">
                <li>How RedeemFund work</li>
                <li>Success stories</li>
                <li>FAQs</li>
                <li>Supported countries</li>
              </ul>
            </span>
          </div>
        </div>
        <footer className="w-full h-[5rem] bg-[#0A2342] text-white flex justify-evenly items-center">
          <p>2021 RedeemFunds</p>
          <span className="flex gap-5">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Legacy</p>
          </span>
          <span className="flex gap-20">
            <img src={p1} alt="p1" />
            <img src={p2} alt="p1" />
            <img src={p3} alt="p1" />
            <img src={p4} alt="p1" />
          </span>
        </footer>
    </div>
  )
}
