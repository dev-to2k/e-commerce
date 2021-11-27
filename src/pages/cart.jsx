import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import FormCheckout from '../components/FormCheckout';
import ListCart from '../components/ListCart';

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const CartPage = () => {
  const options = {
    // currency: 'eur',
    // shippingAddress: true,
    // billingAddress: true,
    // email: true,
    clientSecret: process.env.STRIPE_CLIENT_SECRET,
  };
  return (
    <Container maxW={1320} marginY={10}>
      <Heading textAlign="center" mb={10}>
        Cart
      </Heading>
      <Flex alignItems="stretch" style={{ gap: '3rem' }}>
        <Box padding={'1rem'} borderRadius={8} boxShadow={'lg'}>
          <ListCart />
        </Box>
        <Box>
          <Elements stripe={stripePromise} options={options}>
            <FormCheckout />
          </Elements>
        </Box>
      </Flex>
    </Container>
  );
};

export default CartPage;
