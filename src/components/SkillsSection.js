import React from 'react';
import { Box, SimpleGrid, Text, HStack, Heading, Icon, useColorModeValue, Tag } from '@chakra-ui/react';
import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';

const SkillsSection = () => {
  const bgGradient = useColorModeValue(
    'linear(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))',
    'linear(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))'
  );

  const skills = {
    languages: ['C++', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    frameworks: ['Flask', 'Firebase', 'React', 'Vercel', 'GitHub', 'Azure'],
    software: ['VS Code', 'IntelliJ', 'PyCharm', 'Git', 'CLion']
  };

  return (
    <Box 
      py={8} 
      px={6}
      bgGradient={bgGradient}
      borderRadius="xl"
      my={6}
      className="glass-card"
    >
      <Heading 
        textAlign="center" 
        mb={8}
        bgGradient="var(--gradient-1)"
        bgClip="text"
        fontSize="3xl"
      >
        Technical Skills
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <SkillCategory 
          icon={FaCode} 
          title="Languages" 
          skills={skills.languages} 
        />
        <SkillCategory 
          icon={FaTools} 
          title="Frameworks" 
          skills={skills.frameworks} 
        />
        <SkillCategory 
          icon={FaLaptopCode} 
          title="Tools" 
          skills={skills.software} 
        />
      </SimpleGrid>
    </Box>
  );
};

const SkillCategory = ({ icon, title, skills }) => (
  <Box p={4} className="skill-card" borderRadius="lg">
    <HStack spacing={2} mb={3}>
      <Icon as={icon} boxSize={5} color="blue.400" />
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
    </HStack>
    <Box display="flex" flexWrap="wrap" gap={2}>
      {skills.map((skill, index) => (
        <Tag
          key={index}
          size="sm"
          variant="subtle"
          colorScheme="blue"
          borderRadius="full"
        >
          {skill}
        </Tag>
      ))}
    </Box>
  </Box>
);

export default SkillsSection; 