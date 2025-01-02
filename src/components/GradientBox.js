import { Box, useColorModeValue } from '@chakra-ui/react';

const GradientBox = ({ variant = 'primary', children, ...props }) => {
  const gradientClasses = {
    primary: useColorModeValue('gradient-primary-light', 'gradient-primary-dark'),
    accent: useColorModeValue('gradient-accent-light', 'gradient-accent-dark'),
    hero: useColorModeValue('gradient-hero-light', 'gradient-hero-dark')
  };

  return (
    <Box
      className={`${gradientClasses[variant]} glass-effect`}
      borderRadius="xl"
      overflow="hidden"
      position="relative"
      {...props}
    >
      {children}
    </Box>
  );
};

export default GradientBox; 