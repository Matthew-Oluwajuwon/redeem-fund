import { Modal } from "antd";
import React from "react";

interface Props {
  showModal: boolean;
  message?: string;
  image?: any;
  button?: any;
}

export const NotificationModal: React.FC<Props> = (props: any) => {
  return (
    <Modal
      open={props.showModal}
      footer={null}
      maskClosable={false}
      closable={false}
      closeIcon={null}
      centered
    >
      {props.image}
      <h2 className="font-[poppinsMedium] px-10 py-5 text-center">
        {props.message}
      </h2>
      {props.button}
    </Modal>
  );
};
