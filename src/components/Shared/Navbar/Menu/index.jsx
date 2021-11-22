import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const menu = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Products',
      link: '/products',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const activeStyle = {
    fontWeight: 'bold',
    color: '#e53e3e',
  };

  return (
    <Flex style={{ gap: '1rem' }}>
      {menu.map((item, index) => {
        return (
          <Box key={item.name}>
            <NavLink
              to={item.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.name}
            </NavLink>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Menu;
