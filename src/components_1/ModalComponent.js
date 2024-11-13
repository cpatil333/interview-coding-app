import React, { useState } from "react";
import Modal from "./Modal";
const ModalComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpenModal(true)}>Open Modal</button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h1>Modal Content</h1>
        <p>This is test purpose content</p>
      </Modal>
    </div>
  );
};

export default ModalComponent;
