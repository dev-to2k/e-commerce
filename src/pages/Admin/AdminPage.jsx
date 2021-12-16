import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../components/Admin/Navigation/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <Flex w='100%' backgroundColor={'gray.100'} style={{ gap: '1rem' }}>
      <Box>
        <Sidebar />
      </Box>
      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );

};

export default AdminPage;
