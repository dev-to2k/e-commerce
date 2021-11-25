import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

const FormCheckout = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              placeholder="Example: Sai Gon, Q.1, Nguyen Hue"
            />
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'green.400'}
              color={'white'}
              _hover={{
                bg: 'green.500',
              }}
            >
              Check out
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FormCheckout;
