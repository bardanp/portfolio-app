import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import About from './pages/About';

const theme = extendTheme({
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    brand: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      200: '#7CC4FA',
      300: '#47A3F3',
      400: '#2186EB',
      500: '#0967D2',
      600: '#0552B5',
      700: '#03449E',
      800: '#01337D',
      900: '#002159',
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: { transform: 'translateY(-2px)' },
        transition: 'all 0.2s',
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
        scrollPaddingTop: '80px',
      },
    },
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