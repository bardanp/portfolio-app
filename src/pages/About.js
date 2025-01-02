import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Container,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaDownload, FaEye } from 'react-icons/fa';
import { Element } from 'react-scroll';
import ProjectCard from '../components/ProjectCard';
import Connect from '../pages/Connect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingState from '../components/LoadingState';
import TypedText from '../components/TypedText';
import SkillsSection from '../components/SkillsSection';

const resumeURL = './Resume.pdf';

const projects = [
  {
    title: 'Clarify Task Management App',
    description: 'Developed a productivity-focused task management app, Clarify, using React Native for mobile platforms to help users organize tasks effectively.',
    imageUrls: [
      'https://clarify.bardanp.com/images/img1.jpeg',
      'https://clarify.bardanp.com/images/img2.jpeg',
      'https://clarify.bardanp.com/images/img3.jpeg',
      'https://clarify.bardanp.com/images/img4.jpeg',
      'https://clarify.bardanp.com/images/img5.jpeg',
    ],
    link: 'https://clarify.bardanp.com',
    github: 'https://github.com/bardanp/Clarify',
    techStack: 'React Native, Firebase, Firestore',
    whatILearned: 'Real-time data synchronization and mobile app development.',
    projectInfo: 'Task management with custom themes, notifications, and a sleek user interface.'
  },
  {
    title: 'Nittany Navigator',
    description: 'A campus navigation app developed for Pennsylvania State University students and faculty, allowing them to create events and reports.',
    imageUrls: [
      '/projectImg/nittanyNavigator1.png',
      '/projectImg/nittanyNavigator2.png',
      '/projectImg/nittanyNavigator3.png',
      '/projectImg/nittanyNavigator4.png',
      '/projectImg/nittanyNavigator5.png',
      '/projectImg/nittanyNavigator6.png',
    ],
    link: '',
    github: 'http://nittany-navigator.bardanp.com',
    techStack: 'React Native, Firebase, Node.js, Azure SSO',
    whatILearned: 'Advanced React Native development and Azure integrations.',
    projectInfo: 'Campus navigation with event tracking, location services, and safety features.'
  },
  {
    title: 'AmazonScout API',
    description: 'Developed a robust API that fetches product details, reviews, offers, and search results from Amazon using the ScraperAPI. Deployed on Vercel for seamless accessibility.',
    imageUrls: [
      '/projectImg/amazonScout1.png',
      '/projectImg/amazonScout2.png',
    ],
    link: 'https://amazonscout.bardanp.com',
    github: 'https://github.com/bardanp/AmazonScout',
    techStack: 'Node.js, Express.js, request-promise',
    whatILearned: 'API development, web scraping, and deployment with Vercel.',
    projectInfo: 'Fetches comprehensive Amazon product data using ScraperAPI for e-commerce integration.'
  },
  {
    title: 'Movie Search App',
    description: 'An interactive web app for movie searches, providing users with the ability to search for movies by title. The application utilizes the OMDB API to fetch movie data in real-time.',
    imageUrls: [
      '/projectImg/movieSearchApp1.png',
      '/projectImg/movieSearchApp2.png',
    ],
    link: 'http://movie-app.bardanp.com',
    github: 'https://github.com/bardanp/Movie-App',
    techStack: 'React.js, JavaScript, OMDB API',
    whatILearned: 'API integration, dynamic search functionality, and real-time data management.',
    projectInfo: 'Search functionality with a clean and responsive UI for movie enthusiasts.'
  },
  {
    title: 'Notes Web App',
    description: 'A comprehensive note-taking platform developed as a project for the 487W Software Engineering course. The application allows users to manage notes with features like adding, editing, and deleting notes.',
    imageUrls: [
      '/projectImg/notesWebApp1.png',
      '/projectImg/notesWebApp2.png',
      '/projectImg/notesWebApp3.png',
    ],
    link: '',
    github: 'http://notes-app.bardanp.com',
    techStack: 'Flask, HTML, CSS, JavaScript, Firebase',
    whatILearned: 'Full-stack development, multimedia attachment handling, and responsive design.',
    projectInfo: 'Enhanced note management system with multimedia support for efficient organization.'
  }
];

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cardBg = useColorModeValue('whiteAlpha.800', 'blackAlpha.500');
  const textColor = useColorModeValue('gray.800', 'white');
  const buttonHoverBg = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200');

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) return <LoadingState />;

  return (
    <Box position="relative" minHeight="100vh" pt="80px">
      <div className="site-background background-grid" />
      <Container maxW="7xl" py={10} position="relative">
        <Element name="about">
          <Box className="hero-container" minHeight="70vh">
            <Box 
              className="hero-section glass-card"
              p={8}
              borderRadius="2xl"
              bg={cardBg}
              backdropFilter="blur(10px)"
            >
              <div className="gradient-blur primary" />
              <div className="gradient-blur secondary" />
              
              <VStack spacing={8} maxW="800px" textAlign="center" mx="auto" position="relative" zIndex={2}>
                <Heading 
                  as="h1" 
                  size="2xl"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                  letterSpacing="tight"
                  className="glowing-text"
                >
                  Hey, I'm Bardan Phuyel
                </Heading>
                
                <Text 
                  fontSize="xl"
                  fontWeight="medium"
                  color={textColor}
                >
                  I'm <TypedText />
                </Text>

                <HStack spacing={4} pt={4}>
                  <Button
                    as="a"
                    href={resumeURL}
                    download="Resume.pdf"
                    leftIcon={<FaDownload />}
                    colorScheme="blue"
                    size="lg"
                    className="hover-lift"
                  >
                    Download Resume
                  </Button>
                  <Button
                    as="a"
                    href={resumeURL}
                    target="_blank"
                    leftIcon={<FaEye />}
                    variant="outline"
                    size="lg"
                    className="hover-lift"
                    _hover={{ bg: buttonHoverBg }}
                  >
                    View Resume
                  </Button>
                </HStack>

                <HStack spacing={4}>
                  <IconButton
                    as="a"
                    href="https://github.com/bardanp"
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    size="lg"
                    variant="ghost"
                    className="hover-lift"
                  />
                  <IconButton
                    as="a"
                    href="https://linkedin.com/in/bardanp"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    size="lg"
                    variant="ghost"
                    className="hover-lift"
                  />
                </HStack>
              </VStack>
            </Box>

            <SkillsSection />

            <Heading 
              textAlign="center" 
              mb={12}
              mt={20}
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              fontSize="4xl"
            >
              Featured Projects
            </Heading>

            <Box 
              className="project-grid" 
              mx="auto"
              maxW="100%"
              px={{ base: 4, md: 8 }}
            >
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  {...project} 
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                />
              ))}
            </Box>
          </Box>
        </Element>

        <Connect />
      </Container>
    </Box>
  );
};

export default About;
