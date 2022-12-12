import { Button, Col, Divider, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../shared/layout/footer";
import { Header } from "../../shared/layout/header";
import Facebook from "../../images/facebook.svg";
import { NotificationModal } from "../../shared/component/modal";
import Success from "../../images/success.svg";

export const Login: React.FC = () => {
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
  const [requestPasswordModal, setRequestPasswordModal] =
    useState<boolean>(false);
  const RequestPassword = () => {
    setRequestPasswordModal(true);
  };
  return (
    <div>
      <NotificationModal
        showModal={requestPasswordModal}
        message="Congratulations! your password reset is successful, kindly check your
        mail inbox for the link to reset password"
        button={
          <Button onClick={() => window.location.href = '/redeem-fund-sign-in'} className="bg-[green] modal-btn text-white mx-auto px-10 py-5 flex items-center justify-center">
            Okay
          </Button>
        }
        image={<img src={Success} alt="success" className="mx-auto" />}
      />
      <Header
        button={
          <div>
            Don't have an account?{" "}
            <Link
              className="text-[#3EB489] underline"
              to={"/redeem-fund-registration"}
            >
              Sign up
            </Link>
          </div>
        }
      />
      <div className="w-full h-[43rem] bg-[#f2f4f5] flex items-center justify-center">
        <div className="w-[40%] h-[35rem] bg-white px-20">
          <h1 className="text-[#0A2342] text-[1.8rem] mt-5 font-[poppinsBold] text-center">
            Sign in
          </h1>
          {!showForgotPassword ? (
            <div>
              <Button
                type="primary"
                className="bg-[#4267B2] text-[0.8rem] w-[70%] mx-auto h-fit flex gap-3 text-white font-[poppinsMedium] items-center justify-center my-5 px-20 py-1 hover:bg-[#4267B2]"
              >
                <img src={Facebook} alt="facebook" />
                Continue with Facebook
              </Button>
              <Divider>or</Divider>
              <Form layout="vertical" labelCol={{ span: 24 }} className="my-10">
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="email"
                      label={<span>Email</span>}
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="example@gmail.com"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="password"
                      label={<span>Password</span>}
                      rules={[{ required: true }]}
                    >
                      <Input.Password
                        placeholder="********"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Button
                      htmlType="submit"
                      type="primary"
                      className="bg-[#3EB489] font-[poppinsMedium] w-[50%] mx-auto rounded-md hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid px-10 text-white py-5 flex items-center justify-center text-md"
                    >
                      Sign in to RedeemFund
                    </Button>
                  </Col>
                </Row>
              </Form>
              <p
                onClick={() => setShowForgotPassword(!showForgotPassword)}
                className="text-center hover:text-blue-900 cursor-pointer font-[poppinsMedium] my-3 text-[0.8rem] text-[#3EB489]"
              >
                Forgot your password?
              </p>
            </div>
          ) : (
            <div className="my-10 flex flex-col items-center justify-center">
              <h2 className="font-[poppinsMedium]">Forgot your password?</h2>
              <p className="w-[68%] mt-10">
                Enter your email and we will send you a link to reset your
                password.
              </p>
              <Form
                layout="vertical"
                onFinish={() => RequestPassword()}
                labelCol={{ span: 24 }}
                className="my-10"
              >
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item name="email" rules={[{ required: true }]}>
                      <Input
                        placeholder="Email address"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Button
                      htmlType="submit"
                      type="primary"
                      className="bg-[#3EB489] font-[poppinsMedium] w-[50%] mx-auto rounded-md hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid px-10 text-white py-5 flex items-center justify-center text-md"
                    >
                      Request new password
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Divider />
              <p
                onClick={() => setShowForgotPassword(!showForgotPassword)}
                className="text-center my-auto hover:text-blue-900 cursor-pointer font-[poppinsMedium] text-[0.8rem] text-[#3EB489]"
              >
                Go Back
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
