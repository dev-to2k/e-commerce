import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import FormCheckout from '../components/FormCheckout';
import ListCart from '../components/ListCart';

const CartPage = () => (
  <Container maxW={1320} marginY={10}>
    <Heading textAlign="center" mb={10}>
      Cart
    </Heading>
    <Flex alignItems="stretch" style={{ gap: '3rem' }}>
      <Box padding={'1rem'} borderRadius={8} boxShadow={'lg'}>
        <ListCart />
      </Box>
      <Box>
        <FormCheckout />
      </Box>
    </Flex>
  </Container>
);

export default CartPage;
