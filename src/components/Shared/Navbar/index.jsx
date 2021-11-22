import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart';
import Menu from '../Menu';

const Navbar = () => {
  return (
    <Box>
      <Flex
        align={`center`}
        padding="3"
        boxShadow="rgba(0,0,0,0.05) 0px 1px 2px 0px"
      >
        <Box>
          <strong>E-Commerce</strong>
        </Box>
        <Spacer />
        <Box>
          <Menu />
        </Box>
        <Spacer />
        <Cart />
        <Box>
          <Button colorScheme="green">Log in</Button>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
};

export default Navbar;
