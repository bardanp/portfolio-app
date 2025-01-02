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
  ModalBody,
  ModalCloseButton,
  Image,
  SimpleGrid,
  VStack,
  useColorModeValue,
  Badge,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaImages } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrls, link, github, techStack, whatILearned, projectInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const badgeBg = useColorModeValue('blue.50', 'blue.900');
  const hoverBorderColor = useColorModeValue('blue.200', 'blue.500');
  const badgeTextColor = useColorModeValue('blue.800', 'blue.200');

  const techStackArray = techStack.split(', ');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    requestAnimationFrame(() => {
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      className="project-card"
      p={6}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      bg={cardBg}
      borderColor={borderColor}
      boxShadow="lg"
      role="group"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: hoverBorderColor,
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      data-aos="fade-up"
      position="relative"
    >
      <Box 
        mb={4} 
        borderRadius="lg" 
        overflow="hidden"
        onClick={onOpen}
        cursor="pointer"
        position="relative"
        _hover={{ '& > div': { opacity: 1 } }}
      >
        <Image 
          src={imageUrls[0]} 
          alt={title}
          w="100%"
          h="200px"
          objectFit="cover"
          loading="lazy"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          opacity={0}
          transition="opacity 0.3s"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaImages} color="white" boxSize={8} />
        </Box>
      </Box>

      <Heading size="md" mb={3}>{title}</Heading>
      <Text mb={4} fontSize="sm">{description}</Text>

      <HStack spacing={2} mb={4} flexWrap="wrap">
        {techStackArray.map((tech, index) => (
          <Badge 
            key={index}
            bg={badgeBg}
            color={badgeTextColor}
            px={2}
            py={1}
            borderRadius="full"
            fontSize="xs"
          >
            {tech}
          </Badge>
        ))}
      </HStack>

      <HStack spacing={4} mb={4}>
        {link && (
          <Button
            size="sm"
            leftIcon={<FaExternalLinkAlt />}
            onClick={() => window.open(link, '_blank')}
            colorScheme="blue"
            variant="solid"
            _hover={{
              transform: 'translateY(-2px)',
              bg: 'blue.500',
              boxShadow: 'lg',
            }}
            _active={{
              transform: 'translateY(0)',
              bg: 'blue.600',
            }}
            transition="all 0.2s"
          >
            Live Demo
          </Button>
        )}
        {github && (
          <Button
            size="sm"
            leftIcon={<FaGithub />}
            onClick={() => window.open(github, '_blank')}
            bg="gray.700"
            color="white"
            _hover={{
              transform: 'translateY(-2px)',
              bg: 'gray.800',
              boxShadow: 'lg',
            }}
            _active={{
              transform: 'translateY(0)',
              bg: 'gray.900',
            }}
            transition="all 0.2s"
          >
            Code
          </Button>
        )}
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {imageUrls.map((url, index) => (
                <Image 
                  key={index} 
                  src={url} 
                  alt={`${title} image ${index + 1}`} 
                  borderRadius="md"
                  loading="lazy"
                />
              ))}
            </SimpleGrid>
            <VStack align="start" spacing={4} mt={6}>
              <Text><strong>What I Learned:</strong> {whatILearned}</Text>
              <Text><strong>Project Details:</strong> {projectInfo}</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProjectCard;