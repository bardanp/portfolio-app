import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Button,
  Divider,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCard = ({ title, description, imageUrls, link, github, techStack, whatILearned, projectInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const textColor = 'gray.800';
  const titleColor = 'blue.700';
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const hoverBgColor = 'blue.500';

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
      }, 2000); 
    }
    return () => {
      clearInterval(interval);
    };
  }, [isHovered, imageUrls.length]);

  return (
    <>
      <Box
        className="project-card"
        maxW={title === 'Nittany Navigator' ? "md" : "sm"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor}
        borderColor={borderColor}
        _hover={{
          bg: hoverBgColor,
          transform: 'scale(1.05)',
          zIndex: 1
        }}
        transition="transform 0.3s, background-color 0.3s, color 0.3s"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <VStack p="4" spacing="2" align="left">
          <Heading size="sm" color={titleColor}>{title}</Heading>
          <Text fontSize="xs" color={textColor}>
            {description}
          </Text>
          <Text fontSize="xs" fontWeight="bold" color={textColor}>
            Tech: {techStack}
          </Text>
          <Text fontSize="xs" color={textColor}>
            Learned: {whatILearned}
          </Text>
          <Text fontSize="xs" color={textColor}>
            Info: {projectInfo}
          </Text>
        </VStack>
        <Divider />
        <Box p="3">
          <ButtonGroup variant="solid" spacing="1">
            {link && (
              <Button as="a" href={link} leftIcon={<FaExternalLinkAlt />} bg="blue.500" color="white" _hover={{ bg: 'blue.600' }} size="sm">
                Visit
              </Button>
            )}
            <Button as="a" href={github} leftIcon={<FaGithub />} bg="gray.500" color="white" _hover={{ bg: 'gray.600' }} size="sm">
              GitHub
            </Button>
          </ButtonGroup>
          <Divider />
          <Image
          src={imageUrls[currentImageIndex]}
          alt={`Image of ${title}`}
          w="100%"
          borderTopRadius="lg"
          cursor="pointer"
          onClick={onOpen}
        />
        
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box maxW="lg" mx="auto">
              <Carousel
                selectedItem={currentImageIndex}
                onChange={setCurrentImageIndex}
                showThumbs={false}
                dynamicHeight={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <IconButton
                      icon={<FaArrowLeft />}
                      onClick={onClickHandler}
                      position="absolute"
                      left={0}
                      top="50%"
                      transform="translateY(-50%)"
                      zIndex={2}
                      aria-label="Previous slide"
                    />
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <IconButton
                      icon={<FaArrowRight />}
                      onClick={onClickHandler}
                      position="absolute"
                      right={0}
                      top="50%"
                      transform="translateY(-50%)"
                      zIndex={2}
                      aria-label="Next slide"
                    />
                  )
                }
              >
                {imageUrls.map((url, index) => (
                  <div key={index}>
                    <Image src={url} alt={`Image ${index + 1} of ${title}`} />
                  </div>
                ))}
              </Carousel>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
