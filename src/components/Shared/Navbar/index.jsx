import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cart from './CartIcon';
import Menu from './Menu';

const Navbar = () => {
  return (
    <Box>
      <Flex
        align={`center`}
        padding='3'
        boxShadow='rgba(0,0,0,0.05) 0px 1px 2px 0px'
      >
        <Box>
          <Link to='/'>
            <strong>E-Commerce</strong>
          </Link>
        </Box>
        <Spacer />
        <Box mr={3}>
          <Menu />
        </Box>
        <Spacer />
        <Box>
          <Cart />
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
};

export default Navbar;
