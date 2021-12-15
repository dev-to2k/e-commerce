import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import '../../styles/alert-modal.scss';

const AlertModal = ({ setIsModalOpen }) => {
  return (
    <div className="wrapper-alert-modal" style={{ marginTop: 0 }}>
      <div className="cookiesContent" id="cookiesPopup">
        <button className="close" onClick={() => setIsModalOpen(false)}>
          <CloseIcon w={5} h={5} />
        </button>
        <p>Order Success!</p>
        <CheckCircleIcon w={10} h={10} color="green" />
      </div>
    </div>
  );
};

export default AlertModal;
