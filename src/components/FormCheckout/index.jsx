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
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AlertModal from '../AlertModal';

const FormCheckout = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  const [order, setOrder] = useState(initialState);

  const { firstName, lastName, email, phone, address } = order;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({
      ...order,
      products: [...cartItems],
    });

    setIsModalOpen(true);
  };

  const renderModal = () => {
    if (isModalOpen) {
      return (
        <AlertModal
          setIsModalOpen={setIsModalOpen}
          order={order}
          initialState={initialState}
          setOrder={setOrder}
        />
      );
    }
    return;
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
