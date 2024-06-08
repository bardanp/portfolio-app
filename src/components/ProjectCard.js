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
} from '@chakra-ui/react';

const ProjectCard = ({ title, description, link, github, techStack, whatILearned, projectInfo, imageUrls }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} shadow="md" bg="white" color="gray.800">
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
