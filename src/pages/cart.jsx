import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import ListCart from '../components/ListCart';
import FormCheckout from '../components/FormCheckout';

const CartPage = () => (
  <Container maxW={1204} marginY={10}>
    <Flex alignItems={'center'}>
      <Box
        border="1px"
        borderColor="gray.200"
        padding={'1rem'}
        borderRadius={8}
      >
        <Heading textAlign={'center'} size={'lg'} mb={3}>
          Cart
        </Heading>
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
