import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Text, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!title || !content || !category) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, category }),
      });

      if (response.ok) {
        setSuccess("Post created successfully!");
        setTimeout(() => navigate("/"), 2000); // Redirect to home after 2 seconds
      } else {
        const data = await response.json();
        setError(data.message || "Post creation failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>
          Create New Post
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="content">
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            <FormControl id="category">
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="react">React</option>
                <option value="nodejs">Node.js</option>
                <option value="javascript">JavaScript</option>
              </Select>
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            {success && <Text color="green.500">{success}</Text>}
            <Button type="submit" colorScheme="blue" width="full">
              Create Post
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;