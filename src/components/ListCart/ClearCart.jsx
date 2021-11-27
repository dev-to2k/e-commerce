import { ArrowBackIcon, DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, Th, Tr } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/actions/cartAction';

const ClearCart = () => {
  const dispatch = useDispatch();
  return (
    <Tr>
      <Th colSpan={5} px={0}>
        <Flex alignItems="center" justifyContent="space-between">
          <Link to="/products">
            <Button leftIcon={<ArrowBackIcon />}>
              <Text>Continue shopping</Text>
            </Button>
          </Link>
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => dispatch(clearCart())}
          >
            <DeleteIcon mr={2} />
            Delete
          </Button>
        </Flex>
      </Th>
    </Tr>
  );
};

export default ClearCart;
