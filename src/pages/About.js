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
import { FaLaptopCode, FaUser, FaBriefcase, FaDownload, FaEye } from 'react-icons/fa';
import { Element } from 'react-scroll';
import ProjectCard from '../components/ProjectCard';
import Connect from '../pages/Connect';
import AOS from 'aos';
import 'aos/dist/aos.css';
const resumeURL = './Resume.pdf';

const projects = [
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
    projectInfo: 'Campus navigation with event tracking and safety features.'
  },
  {
    title: 'Movie Search App',
    description: 'An interactive web app for movie searches, providing users with the ability to search for movies by title. The application utilizes the OMDB API to fetch movie data in real-time. Users can view detailed information about each movie, including the title, release year, genre, director, and plot summary. The app also includes a feature to save favorite movies for quick access later.',
    imageUrls: [
      '/projectImg/movieSearchApp1.png',
      '/projectImg/movieSearchApp2.png',
    ],
    link: 'http://movie-app.bardanp.com',
    github: 'https://github.com/bardanp/Movie-App',
    techStack: 'React.js, JavaScript, OMDB API',
    whatILearned: 'API integration and real-time data management.',
    projectInfo: 'Search functionality with user API key integration.'
  },
  {
    title: 'Notes Web App',
    description: 'A comprehensive note-taking platform developed as a project for the 487W Software Engineering course. The application allows users to manage notes with features like adding, editing, and deleting notes. Each note can also have an associated image. The app includes a search bar to quickly find notes by title, content, or ID, and offers sorting options by name or ID.',
    imageUrls: [
      '/projectImg/notesWebApp1.png',
      '/projectImg/notesWebApp2.png',
      '/projectImg/notesWebApp3.png',
    ],
    link: '',
    github: 'http://notes-app.bardanp.com',
    techStack: 'Flask, HTML, CSS, JavaScript, Firebase',
    whatILearned: 'Full-stack development and multimedia attachment handling.',
    projectInfo: 'Enhanced note management with multimedia support.'
  }
];

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const cardBgColor = useColorModeValue('gray.100', 'gray.700');
  const cardTextColor = useColorModeValue('gray.800', 'gray.200');
  const cardBorderColor = useColorModeValue('gray.300', 'gray.600');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box bg={bgColor} color={textColor}>
      <Container maxW="7xl" p={5}>
        <Element name="about">
          <Box p={5} borderRadius="md" shadow="md" mb={10}>
            <Heading as="h1" size="2xl" mb={8} textAlign="center" data-aos="fade-up">
              About Me
            </Heading>
            <Box textAlign="center" mb={10}>
              <HStack justify="center" spacing={8} mb={10}>
                <Link href={resumeURL} download="Resume.pdf">
                  <Button
                    leftIcon={<Icon as={FaDownload} />}
                    colorScheme="gray"
                    _hover={{ bg: 'blue.300' }} 
                    _active={{ bg: 'blue.700' }} 
                  >
                    Download Resume
                  </Button>
                </Link>

                <Link href={resumeURL} target="_blank" rel="noopener noreferrer">
                  <Button
                    leftIcon={<Icon as={FaEye} />}
                    colorScheme="gray"
                    variant="ghost"
                    _hover={{ bg: 'gray.200' }} 
                    _active={{ bg: 'gray.700' }} 
                  >
                    View Resume
                  </Button>
                </Link>
              </HStack>
            </Box>
            <VStack align="start" spacing={10}>
              <Box w="100%" data-aos="fade-right">
                <Heading as="h2" size="lg" mb={2} display="flex" alignItems="center">
                  <Icon as={FaUser} mr={2} /> Background
                </Heading>
                <Divider mb={4} />
                <Text>
                  I am a Computer Science student at Penn State University, expected to graduate in Spring 2025. My academic
                  journey and practical experience have equipped me with a robust understanding of various programming languages
                  and frameworks. I have a passion for technology and innovation, which drives me to constantly learn and
                  apply new skills.
                </Text>
              </Box>

              <Box w="100%" data-aos="fade-right">
                <Heading as="h2" size="lg" mb={2} display="flex" alignItems="center">
                  <Icon as={FaLaptopCode} mr={2} /> Skills
                </Heading>
                <Divider mb={4} />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Text>
                    <strong>Software & IDEs:</strong> Microsoft Office, G Suite, Git, VS Code, IntelliJ, PyCharm, CLion
                  </Text>
                  <Text>
                    <strong>Languages:</strong> C++, Java, Python, JavaScript, SQL, HTML, CSS
                  </Text>
                  <Text>
                    <strong>Frameworks & Tools:</strong> Flask, Firebase, React.js, Vercel, GitHub, Azure
                  </Text>
                </SimpleGrid>
              </Box>

              <Box w="100%" data-aos="fade-left">
                <Heading as="h2" size="lg" mb={2} display="flex" alignItems="center">
                  <Icon as={FaBriefcase} mr={2} /> Relevant Experience
                </Heading>
                <Divider mb={4} />
                <Box bg={cardBgColor} p={4} borderRadius="md" shadow="sm" borderWidth="1px" borderColor={cardBorderColor}>
                  <Heading as="h3" size="md" mb={2}>Software Engineer Intern</Heading>
                  <Text fontSize="sm" color="gray.500">SupplyTiger, Elizabethtown, PA (May 2023 - Jul 2023)</Text>
                  <Text mt={2} color={cardTextColor}>
                    Led SupplyTiger's digital transformation by introducing AI and machine learning to improve efficiency.
                    Developed full-stack solutions using HTML5, Python, JavaScript, and CSS3. Integrated RESTful APIs for automated tasks like Amazon listing creation.
                    Applied data-driven marketing techniques to enhance conversion rates and customer acquisition. Developed unique product offerings such as a custom candy mix and Garden Grace Seeds.
                  </Text>
                </Box>
                <Box bg={cardBgColor} p={4} borderRadius="md" shadow="sm" borderWidth="1px" borderColor={cardBorderColor}>
                  <Heading as="h3" size="md" mb={2}>Retail Sales Consultant</Heading>
                  <Text fontSize="sm" color="gray.500">Xfinity, Hummelstown, PA (March 2022 - April 2023)</Text>
                  <Text mt={2} color={cardTextColor}>
                    Demonstrated exceptional expertise in assisting consumers in selecting optimal Xfinity services and bundles tailored to their unique requirements and preferences, showcasing excellent interpersonal and communication skills.
                    Proficiently explained complex technical concepts in a clear and accessible manner to clients with varying levels of technological proficiency, fostering a comfortable and engaging sales experience.
                    Successfully surpassed full-time sales goals and consistently achieved and exceeded full-time targets despite working part-time while actively pursuing academic endeavors.
                    Employed effective relationship-building strategies to establish strong connections with customers, ensuring personalized attention and tailored solutions that drive customer satisfaction and loyalty.
                    Continuously refined and enhanced selling techniques through keen observation and self-driven learning, resulting in improved sales performance and contributing to the overall success of the sales team.
                  </Text>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Element>

        <Element name="projects">
          <Box w="100%" p={5} borderRadius="md" shadow="md" mb={10} data-aos="fade-up">
            <Heading as="h2" size="lg" mb={2}>
              Projects
            </Heading>
            <Divider mb={4} />
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
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
