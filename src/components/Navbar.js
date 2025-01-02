import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { Box, Button, HStack, useColorMode, useColorModeValue, Image } from '@chakra-ui/react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarBg = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)'
  );
  const textColor = useColorModeValue('gray.800', 'white');
  const buttonHoverBg = useColorModeValue('blue.50', 'blue.900');
  const purpleHoverBg = useColorModeValue('purple.50', 'purple.900');
  const logo = useColorModeValue('/LogoLight.png', '/LogoDark.png');

  const navItems = ['About Me', 'Projects', 'Contact'];

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      zIndex="1000"
      width="100%"
      backdropFilter="blur(10px)"
      bg={navbarBg}
      boxShadow="lg"
      p={4}
    >
      <HStack justify="space-between" align="center" maxW="7xl" mx="auto">
        <RouterLink to="/">
          <Image 
            src={logo} 
            alt="Portfolio Logo" 
            height="40px"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </RouterLink>
        <HStack spacing={6}>
          {navItems.map((item, index) => (
            <ScrollLink 
              key={index}
              to={item.toLowerCase().replace(' ', '')} 
              smooth={true} 
              duration={500}
            >
              <Button
                variant="ghost"
                color={textColor}
                _hover={{
                  bg: buttonHoverBg,
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s"
              >
                {item}
              </Button>
            </ScrollLink>
          ))}
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            color={textColor}
            _hover={{
              bg: purpleHoverBg,
              transform: 'rotate(180deg)',
            }}
            transition="all 0.3s"
          >
            <FontAwesomeIcon 
              icon={colorMode === 'light' ? faMoon : faSun}
              style={{ fontSize: '1.2rem' }}
            />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;