import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiHome, FiMenu } from 'react-icons/fi';
import { RiBillLine } from 'react-icons/ri';
import { FaWpforms } from 'react-icons/fa';
import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';
import { AiOutlineLineChart } from 'react-icons/ai';

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large');

  const items = [
    {
      id: 1,
      title: 'Dashboard',
      icon: FiHome,
      path: 'dashboard',
    },
    {
      id: 2,
      title: 'Orders',
      icon: RiBillLine,
      path: 'orders',
    },
    {
      id: 3,
      title: 'Form Products',
      icon: FaWpforms,
      path: 'form',
    },
    {
      id: 4,
      title: 'Reports',
      icon: AiOutlineLineChart,
      path: 'reports',
    },
  ];
  return (
    <Flex
      pos='sticky'
      left='5'
      marginY={5}
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={navSize === 'small' ? '75px' : '200px'}
      flexDir='column'
      justifyContent='space-between'
      backgroundColor={'white'}
    >
      <Flex
        p='5%'
        flexDir='column'
        w='100%'
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as='nav'
      >
        <IconButton
          background='none'
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') changeNavSize('large');
            else changeNavSize('small');
          }}
        />
        {
          items.map((item) => (
            <NavLink key={item.id} to={item.path}>
              <NavItem
                navSize={navSize}
                icon={item.icon}
                title={item.title}
              />
            </NavLink>
          ))
        }
      </Flex>

      <Flex
        p='5%'
        flexDir='column'
        w='100%'
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align='center'>
          <Avatar size='sm' src='avatar-1.jpg' />
          <Flex
            flexDir='column'
            ml={4}
            display={navSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as='h3' size='sm'>
              Thanh Trung
            </Heading>
            <Text color='gray'>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
