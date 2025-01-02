import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' 
          ? 'linear-gradient(to bottom right, white, gray.50)' 
          : 'linear-gradient(to bottom right, gray.900, gray.800)',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-2px)',
          transition: 'all 0.2s',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);