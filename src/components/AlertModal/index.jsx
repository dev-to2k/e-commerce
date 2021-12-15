import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import { collection, doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../../database/config';
import { clearCart } from '../../redux/actions/cartAction';
import '../../styles/alert-modal.scss';

const addOrderToFirebase = async (order) => {
  const docRef = doc(collection(db, 'orders'));

  await setDoc(doc(db, 'orders', docRef.id), order);
};

const AlertModal = ({ setIsModalOpen, order, initialState, setOrder }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    addOrderToFirebase(order);
    setOrder(initialState);
    localStorage.removeItem('cartItems');
    dispatch(clearCart());
    setIsModalOpen(false);
  };

  return (
    <div className="wrapper-alert-modal" style={{ marginTop: 0 }}>
      <div className="cookiesContent" id="cookiesPopup">
        <button className="close" onClick={() => handleClose()}>
          <CloseIcon w={5} h={5} />
        </button>
        <p>Order Success!</p>
        <CheckCircleIcon w={10} h={10} color="green" />
      </div>
    </div>
  );
};

export default AlertModal;
