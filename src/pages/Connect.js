import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Divider,
  Link,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Connect = () => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const iconColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <div name="connect">
      <Box w="100%" p={5} borderRadius="md" shadow="md" bg={bgColor} color={textColor} data-aos="fade-up">
        <Heading as="h2" size="lg" mb={4} textAlign="center">
          Connect with me!
        </Heading>
        <Divider mb={4} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Link href="https://github.com/bardanp" isExternal>
            <VStack spacing={3} align="center">
              <Icon as={FaGithub} boxSize={10} color={iconColor} />
              <Text fontSize="lg" fontWeight="bold">GitHub</Text>
            </VStack>
          </Link>
          <Link href="mailto:me@bardanp.com" isExternal>
            <VStack spacing={3} align="center">
              <Icon as={FaEnvelope} boxSize={10} color={iconColor} />
              <Text fontSize="lg" fontWeight="bold" textAlign="center">
                Email
                <br />
                me@bardanp.com
              </Text>
            </VStack>
          </Link>
          <Link href="https://www.linkedin.com/in/bardanp" isExternal>
            <VStack spacing={3} align="center">
              <Icon as={FaLinkedin} boxSize={10} color={iconColor} />
              <Text fontSize="lg" fontWeight="bold">LinkedIn</Text>
            </VStack>
          </Link>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Connect;
