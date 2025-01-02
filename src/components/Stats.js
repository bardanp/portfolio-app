import { Box, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';

const Stats = () => {
  const statBg = useColorModeValue('white', 'gray.700');
  
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mt={10}>
      {[
        { label: 'Projects Completed', number: '5+' },
        { label: 'Technologies Used', number: '10+' },
        { label: 'GitHub Commits', number: '500+' },
        { label: 'Years Coding', number: '3+' }
      ].map((stat) => (
        <Box
          key={stat.label}
          bg={statBg}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          textAlign="center"
          data-aos="zoom-in"
        >
          <StatNumber fontSize="3xl" fontWeight="bold" mb={2}>
            {stat.number}
          </StatNumber>
          <StatLabel>{stat.label}</StatLabel>
        </Box>
      ))}
    </SimpleGrid>
  );
}; 