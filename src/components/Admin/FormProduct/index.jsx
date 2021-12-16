import { Box, Button, FormControl, FormLabel, Input, Select, Stack, useColorModeValue } from '@chakra-ui/react';

const FormProduct = () => {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id='id'>
            <FormLabel>Id</FormLabel>
            <Input />
          </FormControl>
          <FormControl id='title'>
            <FormLabel>Title</FormLabel>
            <Input />
          </FormControl>
          <FormControl id='price'>
            <FormLabel>Price</FormLabel>
            <Input type='number' />
          </FormControl>
          <FormControl id='category'>
            <FormLabel>Category</FormLabel>
            <Select placeholder='Select option'>
              <option value='men clothing'>Men's clothing</option>
              <option value='women clothing'>Women's clothing</option>
              <option value='electric'>Electric</option>
              <option value='jewelery'>Jewelery</option>
            </Select>
          </FormControl>
          <FormControl id='description'>
            <FormLabel>Description</FormLabel>
            <Input />
          </FormControl>
          <FormControl id='image'>
            <FormLabel>Image</FormLabel>
            <Input />
          </FormControl>
          <Stack spacing={10}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FormProduct;