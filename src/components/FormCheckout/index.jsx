import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { collection, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../database/config';
import AlertModal from '../AlertModal';

const addOrderToFirebase = async (order) => {
  const docRef = doc(collection(db, 'orders'));

  await setDoc(doc(db, 'orders', docRef.id), order);
};

const FormCheckout = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  const [state, setState] = useState(initialState);

  const { firstName, lastName, email, phone, address } = state;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      products: [...cartItems],
    });

    setIsModalOpen(true);

    console.log(state);

    // addOrderToFirebase(state);

    // setTimeout(() => {
    //   setState(initialState);
    //   localStorage.removeItem('cartItems');
    //   dispatch(clearCart());
    // }, 1000);
  };

  const renderModal = () => {
    if (isModalOpen) {
      return <AlertModal setIsModalOpen={setIsModalOpen} />;
    }
    return '';
  };

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                type="number"
                value={phone}
                name="phone"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                value={address}
                name="address"
                onChange={handleChange}
                placeholder="Example: Sai Gon, Q.1, Nguyen Hue"
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}
                type="submit"
              >
                Check out
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
      {renderModal()}
    </Stack>
  );
};

export default FormCheckout;
