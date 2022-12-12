import React from "react";
import { Button, Carousel, Col, Form, Input, Row } from "antd";
import CardImage from "../../images/card.png";
import Fund from "../../images/fund.svg";
import Create from "../../images/create.svg";
import Share from "../../images/share.svg";
import Seg from "../../images/seg.svg";
import Shield from "../../images/shield.svg";
import Shield2 from "../../images/shield2.svg";
import Earth from "../../images/earth.svg";
import DNA from "../../images/dna.svg";
import Mark from "../../images/mark.svg";
import Coursera from "../../images/coursera.png";
import Udacity from "../../images/udacity.png";
import Udemy from "../../images/udemy.png";
import Skill from "../../images/skill.png";
import { Discover } from "./Discover";
import Smile from "../../images/smile.png";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextArea from "antd/es/input/TextArea";
import { Header } from "../../shared/layout/header";
import { NavLink } from "react-router-dom";
import { Footer } from "../../shared/layout/footer";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowRightOutlined />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowLeftOutlined />
    </div>
  );
}

export const LandingPage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-auto">
      <Header
        menu={
          <ul className="flex gap-10 ">
            <NavLink to={"discover"}>Discover</NavLink>
            <NavLink to={"discover"}>About US</NavLink>
            <NavLink to={"discover"}>How it works</NavLink>
            <NavLink to={"discover"}>Contact us</NavLink>
            <NavLink to={"/redeem-fund-sign-in"}>Sign in</NavLink>
          </ul>
        }
        button={
          <Button
            type="primary"
            className="bg-[#3EB489] hover:outline-2 hover:outline-[#3EB489] hover:text-[#3EB489] hover:outline-solid rounded-md text-white py-5 flex items-center justify-center w-[15rem] text-lg"
          >
            Start a campaign
          </Button>
        }
      />
      <div className="h-full w-full">
        <Carousel autoplay>
          <div className="slider1 w-full text-white">
            <section className="flex flex-col items-start justify-center h-full">
              <div className="background"></div>
              <h1 className="text-[5rem] w-[60%] mx-20">Fund your dreams</h1>
              <p className="text-[2rem] w-[60%] mx-20">
                The future belongs to those who believe in the beauty of their
                dreams
              </p>
              <Button
                type="primary"
                className="bg-[#3EB489]  hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid w-[12%] mx-20 mt-10 rounded-md opacity-100 px-10 text-white py-5 flex items-center justify-center text-md"
              >
                Start a campaign
              </Button>
            </section>
          </div>
          <div className="slider2 w-full text-white">
            <section className="flex flex-col items-start justify-center h-full">
              <div className="background"></div>
              <h1 className="text-[5rem] w-[60%] mx-20">Fund your dreams</h1>
              <p className="text-[2rem] w-[60%] mx-20">
                Raise funds and get access to world-class training and
                development programs{" "}
              </p>
              <Button
                type="primary"
                className="bg-[#3EB489]  hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid w-[12%] mx-20 mt-10 rounded-md opacity-100 px-10 text-white py-5 flex items-center justify-center text-md"
              >
                Start a campaign
              </Button>
            </section>
          </div>
          <div className="slider3 w-full text-white">
            <section className="flex flex-col items-start justify-center h-full">
              <div className="background"></div>
              <h1 className="text-[5rem] w-[60%] mx-20">Fund your dreams</h1>
              <p className="text-[2rem] w-[60%] mx-20">
                You are never too old to set another goal or to dream a new
                dream
              </p>
              <Button
                type="primary"
                className="bg-[#3EB489]  hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid w-[12%] mx-20 mt-10 rounded-md opacity-100 px-10 text-white py-5 flex items-center justify-center text-md"
              >
                Start a campaign
              </Button>
            </section>
          </div>
        </Carousel>
        <div className="flex justify-between w-full px-36 py-20 gap-10">
          <img
            data-aos="zoom-in-up"
            src={CardImage}
            className="h-[50%]"
            alt={"card-imag"}
          />
          <div data-aos="zoom-in-up">
            <h1 className="text-[3rem] text-[#0A2342] text-center font-[poppinsBold]">
              About us
            </h1>
            <p className="text-justify leading-10 h-[50%] xl:text-sm xl:leading-7 font-[poppinsMedium]">
              Every one of us has a dream, personal dreams and dreams of a
              better world. That spark of inspiration to help a person, teach a
              person, fix a neighborhood, or even change a nation. At
              Redeemfunds, we empower individuals to chase their dreams and and
              donors to turn compassion into action. Because that is how dreams
              come true and change happens..
            </p>
            <p className="text-justify leading-10 h-[50%] xl:text-sm xl:leading-7 font-[poppinsMedium]">
              With Redeemfunds, champion causes that matter and raise money to
              make a lasting difference. Through RedeemFunds, people have the
              tools they need to share their cause far and wide and harness the
              power of generosity. We are transforming the way people give and
              changing lives—are you ready to join us?
            </p>
          </div>
        </div>
        <div className="w-full relative min-h-full h-full">
          <h1 className="text-[3rem] text-[#0A2342] text-center font-[poppinsBold]">
            How it works
          </h1>
          <p className="text-center text-[1.3rem] font-[poppinsMedium] my-5 mb-10">
            Create a campaign for your cause in 3 easy steps
          </p>
          <div className="bg-[#0A2342] flex flex-col justify-between h-[33rem] w-full items-center px-20 py-20">
            <div className="flex w-full justify-evenly">
              <div
                data-aos="zoom-in-up"
                className="flex flex-col gap-5 items-center justify-center w-[20%] text-white"
              >
                <img src={Create} alt={"Create"} />
                <h1 className="text-[1.5rem] font-[poppinsMedium]">Create</h1>
                <p className="text-[1rem] font-[poppinsMedium] text-center">
                  Create a campaign to raise funds for your dream course or
                  skill.
                </p>
              </div>
              <div
                data-aos="zoom-in-up"
                className="flex flex-col gap-5 items-center justify-center w-[20%] text-white"
              >
                <img src={Share} alt={"share"} />
                <h1 className="text-[1.5rem] font-[poppinsMedium]">Share</h1>
                <p className="text-[1rem] font-[poppinsMedium] text-center">
                  Sharing tools to spread your campaign across social networks.
                </p>
              </div>
              <div
                data-aos="zoom-in-up"
                className="flex flex-col gap-5 items-center justify-center w-[20%] text-white"
              >
                <img src={Fund} alt={"fund"} />
                <h1 className="text-[1.5rem] font-[poppinsMedium]">Fund</h1>
                <p className="text-[1rem] font-[poppinsMedium] text-center">
                  Receive donations to your cause and get access to start
                  studying immediately.
                </p>
              </div>
            </div>
            <Button
              type="primary"
              className="bg-[#3EB489]  hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid w-[12%] mx-20 rounded-md opacity-100 px-10 text-white py-5 flex items-center justify-center text-md"
            >
              Start a campaign
            </Button>
          </div>
          <div className="my-20 w-full px-36">
            <h1 className="text-[3rem] text-[#0A2342] text-center font-[poppinsBold]">
              Features
            </h1>
            <div className="flex flex-wrap gap-10 my-20 justify-between">
              <div
                data-aos="flip-up"
                className="flex gap-3 w-[28%] items-start"
              >
                <img src={Earth} alt={"earth"} />

                <div className="flex flex-col gap-10">
                  <h1 className="text-[1.5rem] font-[poppinsMedium]">
                    African Leader
                  </h1>
                  <p className="text-justify">
                    RedeemFunds is the first and only donor guarantee in Africa
                    catering to africans.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-up"
                className="flex gap-3 w-[28%] items-start"
              >
                <img src={Mark} alt={"earth"} />

                <div className="flex flex-col gap-10">
                  <h1 className="text-[1.5rem] font-[poppinsMedium]">
                    Simple setup
                  </h1>
                  <p className="text-justify">
                    You can personalise and share your Redeemfunds link in just
                    a few minutes.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-up"
                className="flex gap-3 w-[28%] items-start"
              >
                <img src={Shield} alt={"earth"} />

                <div className="flex flex-col gap-10">
                  <h1 className="text-[1.5rem] font-[poppinsMedium]">Secure</h1>
                  <p className="text-justify">
                    Our Trust & Safety team works around the clock to protect
                    you against fraud.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-up"
                className="flex gap-3 w-[28%] items-start"
              >
                <img src={Shield2} alt={"earth"} />

                <div className="flex flex-col gap-10">
                  <h1 className="text-[1.5rem] font-[poppinsMedium]">
                    Unlimited courses
                  </h1>
                  <p className="text-justify">
                    Get unlimited access to thousands of inspiring course and
                    skiils.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-up"
                className="flex gap-3 w-[28%] items-start"
              >
                <img src={DNA} alt={"earth"} />

                <div className="flex flex-col gap-10">
                  <h1 className="text-[1.5rem] font-[poppinsMedium]">
                    Social reach
                  </h1>
                  <p className="text-justify">
                    Harness the power of social media to spread your story and
                    get more support.
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-up"
                className="flex gap-3 w-[28%] items-start"
              >
                <img src={Seg} alt={"earth"} />

                <div className="flex flex-col gap-10">
                  <h1 className="text-[1.3rem] font-[poppinsMedium]">
                    24/7 Customer service
                  </h1>
                  <p className="text-justify">
                    Our best-in-class Customer Support agents will answer your
                    questions, day or night.
                  </p>
                </div>
              </div>
              <Button
                type="primary"
                className="bg-[#3EB489]  hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid w-[12%] mx-auto rounded-md opacity-100 px-10 text-white py-5 flex items-center justify-center text-md"
              >
                Start a campaign
              </Button>
            </div>
          </div>
          <div className="w-full h-[30rem] bg-[#ecf8f4] my-20">
            <h1 className="text-[2.5rem] text-[#0A2342] py-10 text-center font-[poppinsBold]">
              Our partners
            </h1>
            <p className="text-[1.8rem] text-center font-[poppinsMedium]">
              Unlimited access to a wide range of courses and skills{" "}
            </p>

            <div className="flex justify-between w-full px-36 py-10">
              <img data-aos="fade-down-right" src={Udacity} alt={"udacity"} />
              <img data-aos="fade-down-right" src={Udemy} alt={"udemy"} />
              <img data-aos="fade-down-right" src={Coursera} alt={"coursera"} />
              <img data-aos="fade-down-right" src={Skill} alt={"skill"} />
            </div>
          </div>
          <div className="w-full px-36 py-10">
            <Discover />
          </div>
          <Slider {...settings} arrows={true} draggable={true}>
            <div className="w-full flex h-[27rem] justify-around bg-[#f2f4f5] px-52 xl:px-20 my-20 py-10">
              <div className="flex justify-around gap-5 h-full">
                <div className=" h-full w-[70%] flex flex-col justify-center">
                  <h1 className="text-[2rem] w-[100%] mx-20 font-bold font-[poppinsBold]">
                    RedeemFund Success stories
                  </h1>
                  <p className="text-[1.5rem] w-[70%] mx-20">
                    “After a successful fundraising campaign I am now a product
                    designer thanks to Udemy & Redeemfunds.”{" "}
                  </p>
                  <div className="mx-20 py-10">
                    <p className="font-[poppinsMedium] font-bold">
                      -Tamara Kimani
                    </p>
                    <p>Product Designer</p>
                  </div>
                </div>
                <img src={Smile} alt={"smile"} />
              </div>
            </div>
          </Slider>
          <div className="mt-[-3rem] mb-5 w-full px-36">
            <h1 className="text-center text-[2rem] font-[poppinsMedium] my-5 mb-10">
              Ready to fund your dreams?
            </h1>
            <Button
              type="primary"
              className="bg-[#3EB489]  hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid w-[12%] mx-auto rounded-md opacity-100 px-10 text-white py-5 flex items-center justify-center text-md"
            >
              Start a campaign
            </Button>
          </div>
          <div className="w-full h-[35rem] flex gap-20 footer-background text-white px-36 py-20">
            <div className="w-[48%]">
              <h1 className="text-[2rem] font-[poppinsBold]">Contact us</h1>
              <p className="text-[1.2rem] mt-10 text-justify font-[poppinsMedium]">
                With Redeemfund, we are creating a space where individuals can
                fund their dreams and champion causes that matter and raise
                money to make a lasting difference. Through RedeemFunds, people
                have the tools they need to share their cause far and wide and
                harness the power of generosity. We are transforming the way
                people give and changing lives—are you ready to join us?
              </p>
            </div>
            <div className="w-[48%] text-white">
              <Form layout="vertical" labelCol={{ span: 24 }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      label={<span className="text-white">Name</span>}
                    >
                      <Input
                        placeholder="Enter your name"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="email"
                      label={<span className="text-white">Email</span>}
                    >
                      <Input
                        placeholder="Enter your email address"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="subject"
                      label={<span className="text-white">Subject</span>}
                    >
                      <Input
                        placeholder="subject"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="message"
                      label={<span className="text-white">Message</span>}
                    >
                      <TextArea
                        placeholder="Enter your message"
                        rows={7}
                        className="bg-white px-5"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Button
                      htmlType="submit"
                      type="primary"
                      className="bg-[#3EB489] w-[30%] rounded-md hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid px-10 text-white py-5 flex items-center justify-center text-md"
                    >
                      Send message <SendOutlined />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
