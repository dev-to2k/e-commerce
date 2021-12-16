import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const FormLogin = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === 'admin' && user.password === 'admin') {
      alert('Login success');
      window.location = '/admin';
    } else {
      return alert('Login failed');
    }
  };

  return (
    <Stack spacing={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id='username'>
          <FormLabel>Username</FormLabel>
          <Input
            value={user.username}
            name='username'
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl id='password'>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            value={user.password}
            name='password'
            onChange={(e) => handleChange(e)}
          />
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
            type='submit'
          >
            Sign in
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default FormLogin;
