import React, { useState } from 'react';
import { ChakraProvider, extendTheme, Box, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import About from './pages/About';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const bgColor = useColorModeValue('white', 'gray.800'); 

  const toggleTheme = () => {
    setThemeMode(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bgColor} minHeight="100vh">
        <Navbar toggleTheme={toggleTheme} theme={themeMode} />
        <About />
      </Box>
    </ChakraProvider>
  );
}

export default App;
