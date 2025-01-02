import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Container,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaLaptopCode, FaUser, FaBriefcase, FaDownload, FaEye, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Element } from 'react-scroll';
import ProjectCard from '../components/ProjectCard';
import Connect from '../pages/Connect';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh" pt="80px">
      <Container maxW="7xl" py={10}>
        <Element name="about">
          <Box 
            textAlign="center" 
            mb={12} 
            position="relative"
            py={20}
            background="linear-gradient(45deg, #4299E1 0%, #805AD5 100%)"
            borderRadius="xl"
            color="white"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="blackAlpha.400"
              backdropFilter="blur(2px)"
            />
            <Box position="relative" zIndex={2}>
              <Heading 
                as="h1" 
                size="2xl" 
                mb={4} 
                data-aos="fade-down"
                bgGradient="linear(to-r, #ffffff, #E2E8F0)"
                bgClip="text"
              >
                Bardan Phuyel
              </Heading>
              <Text 
                fontSize="xl" 
                mb={6}
                data-aos="fade-up"
              >
                Computer Science Student & Full-Stack Developer
              </Text>
              <HStack justifyContent="center" spacing={6}>
                <Button
                  size="lg"
                  colorScheme="whiteAlpha"
                  leftIcon={<FaGithub />}
                  onClick={() => window.open('https://github.com/bardanp', '_blank')}
                >
                  View GitHub
                </Button>
                <Button
                  size="lg"
                  colorScheme="whiteAlpha"
                  variant="outline"
                  leftIcon={<FaLinkedin />}
                  onClick={() => window.open('https://linkedin.com/in/bardanp', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </HStack>
            </Box>
          </Box>

          <HStack justifyContent="center" spacing={6} mb={10}>
            <Link href={resumeURL} download="Resume.pdf">
              <Button
                leftIcon={<Icon as={FaDownload} />}
                colorScheme="blue"
                variant="solid"
                data-aos="fade-right"
              >
                Download Resume
              </Button>
            </Link>
            <Link href={resumeURL} target="_blank" rel="noopener noreferrer">
              <Button
                leftIcon={<Icon as={FaEye} />}
                colorScheme="blue"
                variant="outline"
                data-aos="fade-left"
              >
                View Resume
              </Button>
            </Link>
          </HStack>

          <VStack spacing={12} alignItems="start">
            <Box w="100%" data-aos="fade-right">
              <Heading as="h2" size="lg" mb={4} display="flex" alignItems="center">
                <Icon as={FaUser} mr={3} /> About Me
              </Heading>
              <Divider mb={6} />
              <Text>
                I am a passionate Computer Science student at Penn State University, expected to graduate in Spring 2025.
                My academic and professional journey has equipped me with expertise in various programming languages,
                frameworks, and tools. I thrive on building innovative solutions and learning new technologies.
              </Text>
            </Box>

            <Box w="100%" data-aos="fade-right">
              <Heading as="h2" size="lg" mb={4} display="flex" alignItems="center">
                <Icon as={FaLaptopCode} mr={3} /> Skills
              </Heading>
              <Divider mb={6} />
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                <Text><strong>Languages:</strong> C++, Python, Java, JavaScript, SQL, HTML, CSS</Text>
                <Text><strong>Frameworks & Tools:</strong> React.js, Firebase, Flask, Node.js, Git, Azure</Text>
                <Text><strong>Software:</strong> Visual Studio Code, IntelliJ, PyCharm, CLion, GitHub</Text>
                <Text><strong>Other:</strong> API integration, RESTful services, Responsive Design</Text>
              </SimpleGrid>
            </Box>

            <Box w="100%" data-aos="fade-left">
              <Heading as="h2" size="lg" mb={4} display="flex" alignItems="center">
                <Icon as={FaBriefcase} mr={3} /> Experience
              </Heading>
              <Divider mb={6} />
              <Box bg={useColorModeValue('white', 'gray.700')} p={6} borderRadius="lg" shadow="md">
                <Heading as="h3" size="md" mb={3}>
                  Software Engineer Intern
                </Heading>
                <Text fontSize="sm" color="gray.500">SupplyTiger, Elizabethtown, PA (May 2023 - Jul 2023)</Text>
                <Box as="ul" mt={4} pl={5}>
                  <li>Integrated AI and machine learning solutions for efficiency improvement.</li>
                  <li>Built scalable, full-stack applications with Python, HTML, and JavaScript.</li>
                  <li>Automated e-commerce operations through RESTful API integrations.</li>
                  <li>Created innovative product offerings and marketing strategies.</li>
                </Box>
              </Box>

              <Box bg={useColorModeValue('white', 'gray.700')} p={6} mt={6} borderRadius="lg" shadow="md">
                <Heading as="h3" size="md" mb={3}>
                  Retail Sales Consultant
                </Heading>
                <Text fontSize="sm" color="gray.500">Xfinity, Hummelstown, PA (Mar 2022 - Apr 2023)</Text>
                <Box as="ul" mt={4} pl={5}>
                  <li>Exceeded sales goals by offering tailored solutions for customers.</li>
                  <li>Communicated complex technical concepts effectively to non-technical clients.</li>
                  <li>Achieved top performance while balancing academic responsibilities.</li>
                </Box>
              </Box>
            </Box>
          </VStack>
        </Element>

        <Element name="projects">
          <Box mt={16} mb={20} data-aos="fade-up">
            <Heading as="h2" size="lg" mb={6} textAlign="center">
              Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </SimpleGrid>
          </Box>
        </Element>

        <Connect />
      </Container>
    </Box>
  );
};

export default About;
