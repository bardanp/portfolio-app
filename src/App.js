import React from 'react';
import { ChakraProvider, Box, useColorMode, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import About from './pages/About';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Box bg={colorMode === 'light' ? 'white' : 'gray.800'} minHeight="100vh">
        <Navbar />
        <About />
      </Box>
    </ChakraProvider>
  );
}

export default App;