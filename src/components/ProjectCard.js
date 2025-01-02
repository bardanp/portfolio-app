import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const ProjectCard = ({ title, description, link, github, techStack, whatILearned, projectInfo, imageUrls }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const tagBg = useColorModeValue('blue.50', 'whiteAlpha.200');

  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      p={6}
      bg={cardBg}
      color={textColor}
      borderColor={borderColor}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      backdropFilter="blur(10px)"
      _hover={{
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: '2xl',
        borderColor: useColorModeValue('blue.200', 'blue.500'),
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Heading size="md" mb={2}>{title}</Heading>
      <Text mb={4}>{description}</Text>
      <VStack align="start" spacing={2} mb={4}>
        {link && (
          <Button as="a" href={link} target="_blank" rel="noopener noreferrer" colorScheme="blue">
            View Project
          </Button>
        )}
        {github && (
          <Button as="a" href={github} target="_blank" rel="noopener noreferrer" colorScheme="gray">
            View Code
          </Button>
        )}
        <Button onClick={onOpen} colorScheme="teal">Show Images</Button>
      </VStack>
      <Text><strong>Tech Stack:</strong> {techStack}</Text>
      <Text><strong>What I Learned:</strong> {whatILearned}</Text>
      <Text><strong>Project Info:</strong> {projectInfo}</Text>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title} - Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {imageUrls.map((url, index) => (
                <Image key={index} src={url} alt={`${title} image ${index + 1}`} borderRadius="md" />
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProjectCard;