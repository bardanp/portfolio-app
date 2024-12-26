import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { Box, Button, HStack, useColorMode, useColorModeValue, Image } from '@chakra-ui/react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarBg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');
  const logo = useColorModeValue('/LogoLight.png', '/LogoDark.png'); 

  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      zIndex="1000"
      bg={navbarBg}
      boxShadow="md"
      width="100%"
      p={4}
    >
      <HStack justify="space-between" align="center">
        <RouterLink to="/">
          <Image src={logo} alt="Bardan's Portfolio Logo" height="40px" />
        </RouterLink>
        <HStack spacing={4}>
          <ScrollLink to="about" smooth={true} duration={500}>
            <Button variant="link" color={textColor}>About Me</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button variant="link" color={textColor}>Projects</Button>
          </ScrollLink>
          <ScrollLink to="connect" smooth={true} duration={500}>
            <Button variant="link" color={textColor}>Contact</Button>
          </ScrollLink>
          <Button onClick={toggleColorMode} variant="link" color={textColor} 
            style={{ transition: 'transform 0.3s', transform: colorMode === 'light' ? 'rotate(0deg)' : 'rotate(180deg)' }}>
            <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;