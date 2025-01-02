import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import About from './pages/About';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg={{ light: 'white', dark: 'gray.800' }} minHeight="100vh">
        <Navbar />
        <About />
      </Box>
    </ChakraProvider>
  );
}

export default App;