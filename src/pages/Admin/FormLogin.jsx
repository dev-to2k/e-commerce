import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React from 'react';

const FormLogin = () => {
  return (
    <Stack spacing={4}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Stack spacing={10}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}
        ></Stack>
        <Button
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};

export default FormLogin;
