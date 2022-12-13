import { Button, Col, Divider, Form, Input, Row, Select, Upload } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../shared/layout/footer";
import { Header } from "../../shared/layout/header";
import { CaretDownOutlined } from "@ant-design/icons";
import { Countries } from "../../shared/component/country-list";
import { RcFile, UploadFile, UploadProps } from "antd/es/upload";

export const Registration: React.FC = () => {
  const [showNextRgistrationForm, setShowNextRgistrationForm] =
    useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const CompleteRegistration = () => {
    setShowNextRgistrationForm(!showNextRgistrationForm);
  };

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <Button className="text-[#3EB489] font-[poppinsMedium]" type="text">
      Upload a picture
    </Button>
  );

  return (
    <div>
      <Header
        button={
          <div>
            Already have an account?{" "}&nbsp;
            <Link
              className="text-[#3EB489] underline"
              to={"/redeem-fund-sign-in"}
            >
              Sign in
            </Link>
          </div>
        }
      />
      <div className="w-full h-auto py-10 bg-[#f2f4f5] flex items-center justify-center">
        <div className="w-[50%] h-auto bg-white py-10 px-20">
          {!showNextRgistrationForm ? (
            <div>
              <h1 className="text-[#0A2342] text-[1.8rem] mt-5 font-[poppinsBold] text-center">
                Sign up
              </h1>
              <Form
                layout="vertical"
                labelCol={{ span: 24 }}
                onFinish={() => CompleteRegistration()}
                className="my-10"
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="firstName"
                      label={<span>First Name</span>}
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="Adam"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="lastName"
                      label={<span>Last Name</span>}
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="John"
                        className="bg-white px-5 h-[2.5rem]"
                      />
                    </Form.Item>
                  </Col>
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
                      className="bg-[#3EB489] w-[30%] font-[poppinsMedium] mx-auto rounded-md hover:border-2 hover:border-[#3EB489] hover:text-[#3EB489] hover:border-solid px-10 text-white py-5 flex items-center justify-center text-md"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Divider />
              <p className="text-center my-3 text-[0.8rem]">
                RedeemFund's fee is 5% from each donation you receive. The
                payment processor fee is 2.9% + $0.30 per donation. By
                continuing, you agree to the Redeemfund{" "}
                <span className="text-[#3EB489]">terms</span> and you
                acknowledge receipt of our{" "}
                <span className="text-[#3EB489]">privacy </span>
                policy.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="text-[#0A2342] text-[1.5rem] mt-5 font-[poppinsBold] text-center">
                Set your profile
              </h1>
              <span className="w-full flex justify-center flex-col items-center">
                <Form
                  layout="vertical"
                  labelCol={{ span: 24 }}
                  className="my-10 w-[70%]"
                >
                  <Row gutter={16}>
                    <Col
                      span={24}
                      className="flex justify-center flex-col items-center"
                    >
                      {fileList.length === 1 ? (
                        <img
                          alt="example"
                          className="w-[5rem] h-[5rem] text-white rounded-full"
                          src={previewImage}
                        />
                      ) : (
                        <span className="w-[5rem] h-[5rem] text-white rounded-full text-[2rem] bg-[#C1C6C9] flex items-center justify-center">
                          OA
                        </span>
                      )}
                      <Form.Item name="image" rules={[{ required: true }]}>
                        <Upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          fileList={fileList}
                          onPreview={handlePreview}
                          onChange={handleChange}
                        >
                          {fileList.length === 1 ? null : uploadButton}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="name"
                        label={<span>Name</span>}
                        rules={[{ required: true }]}
                      >
                        <Input
                          placeholder="Olubunmi Amaremo"
                          className="bg-white px-5 h-[2.5rem]"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="country"
                        label={<span>Country</span>}
                        rules={[{ required: true }]}
                      >
                        <Select
                          placeholder="Select your country of residence"
                          suffixIcon={
                            <CaretDownOutlined className="text-black" />
                          }
                        >
                          {Countries.map((x, index) => (
                            <Select.Option key={index} value={x.name}>
                              {x.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="phoneNumber"
                        label={<span>Mobile Number</span>}
                        rules={[{ required: true }]}
                      >
                        <Input
                          placeholder="09000000000"
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
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </span>
              <Divider />
              <p
                onClick={() =>
                  setShowNextRgistrationForm(!showNextRgistrationForm)
                }
                className="text-center hover:text-blue-900 cursor-pointer font-[poppinsMedium] text-[0.8rem] text-[#3EB489]"
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
