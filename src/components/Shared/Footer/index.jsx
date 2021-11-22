import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const items = [
    {
      id: 1,
      label: 'Contact',
      href: '/contact',
      text1: 'About us',
      text2: 'Blog',
      text3: 'Contact us',
      text4: 'Pricing',
    },
    {
      id: 2,
      label: 'Support',
      href: '/support',
      text1: 'Help Center',
      text2: 'Terms of Service',
      text3: 'Legal',
      text4: 'Privacy Policy',
    },
  ];
  return (
    <Box height="275" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="1204" height="100%" paddingTop={10}>
        <Flex justifyContent="space-between">
          <Box>
            <Heading marginBottom={5} size="lg">
              E-Commerce
            </Heading>
            <Text>2021 Designed by Thanh Trung.</Text>
          </Box>
          {items.map((item) => (
            <Box key={item.id}>
              <Heading marginBottom={5} size="lg">
                {item.label}
              </Heading>
              <UnorderedList styleType="none" textAlign="left" marginLeft={0}>
                <ListItem>{item.text1}</ListItem>
                <ListItem>{item.text2}</ListItem>
                <ListItem>{item.text3}</ListItem>
                <ListItem>{item.text4}</ListItem>
              </UnorderedList>
            </Box>
          ))}
          <Box>
            <Heading marginBottom={5} size="lg">
              Stay up to date
            </Heading>
            <Flex>
              <Input variant="filled" placeholder="Your email address" />
              <Button colorScheme="green" marginLeft={3}>
                Hi
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
