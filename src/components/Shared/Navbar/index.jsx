import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cart from './CartIcon';
import Menu from './Menu';

const Navbar = () => {
  return (
    <Box>
      <Flex
        align={`center`}
        padding="3"
        boxShadow="rgba(0,0,0,0.05) 0px 1px 2px 0px"
      >
        <Box width="25%">
          <Link to="/">
            <strong>E-Commerce</strong>
          </Link>
        </Box>
        <Box width="50%" mr={10}>
          <form action="/products">
            <InputGroup>
              <Input type="text" placeholder="Search to something..." />
              <InputRightElement children={<SearchIcon color="green.500" />} />
            </InputGroup>
          </form>
        </Box>
        <Box display="flex" width="25%">
          <Box mr={3}>
            <Menu />
          </Box>
          <Cart />
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
};

export default Navbar;
