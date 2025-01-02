import { Box, Progress, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

const SkillProgress = () => {
  const skills = [
    { name: 'React/React Native', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Firebase', level: 85 },
    { name: 'UI/UX Design', level: 70 }
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {skills.map(skill => (
        <Box key={skill.name} mb={4}>
          <Text mb={2} fontWeight="medium">{skill.name}</Text>
          <Progress 
            value={skill.level} 
            colorScheme="blue" 
            hasStripe 
            isAnimated
            borderRadius="full"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}; 