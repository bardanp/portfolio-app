import { Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingState = () => (
  <VStack spacing={4} py={10}>
    <Spinner size="xl" color="blue.500" />
    <Text>Loading content...</Text>
  </VStack>
);

export default LoadingState; 