import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';
import FormCheckout from '../components/FormCheckout';
import ListCart from '../components/ListCart';

const CartPage = () => (
  <Container maxW={1204} marginY={10}>
    <Heading textAlign="center" mb={10}>
      Cart
    </Heading>
    <Flex alignItems={'center'}>
      <Box
        border="1px"
        borderColor="gray.200"
        padding={'1rem'}
        borderRadius={8}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      >
        <ListCart />
      </Box>
      <Spacer />
      <Box>
        <FormCheckout />
      </Box>
    </Flex>
  </Container>
);

export default CartPage;
