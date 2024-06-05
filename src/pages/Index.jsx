import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg">
          Tech Forum
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/categories" color="white">
            Categories
          </Link>
          <Link as={RouterLink} to="/about" color="white">
            About
          </Link>
          <Link as={RouterLink} to="/register" color="white">
            Register
          </Link>
          <Link as={RouterLink} to="/create-post" color="white">
            Create Post
          </Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} align="start">
        {/* Discussion Threads */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="md" mb={4}>
            Discussion Threads
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">
                How to learn React?
              </Heading>
              <Text>by John Doe - 2 hours ago</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">
                Best practices for Node.js
              </Heading>
              <Text>by Jane Smith - 5 hours ago</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">
                Understanding JavaScript closures
              </Heading>
              <Text>by Alice Johnson - 1 day ago</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" borderWidth="1px" borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="md" mb={4}>
            Categories
          </Heading>
          <VStack spacing={2} align="stretch">
            <Link as={RouterLink} to="/category/react">
              React
            </Link>
            <Link as={RouterLink} to="/category/nodejs">
              Node.js
            </Link>
            <Link as={RouterLink} to="/category/javascript">
              JavaScript
            </Link>
          </VStack>
          <Heading as="h2" size="md" mt={8} mb={4}>
            Recent Posts
          </Heading>
          <VStack spacing={2} align="stretch">
            <Link as={RouterLink} to="/post/1">
              How to learn React?
            </Link>
            <Link as={RouterLink} to="/post/2">
              Best practices for Node.js
            </Link>
            <Link as={RouterLink} to="/post/3">
              Understanding JavaScript closures
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;