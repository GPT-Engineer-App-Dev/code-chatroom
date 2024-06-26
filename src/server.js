const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];
const posts = [];

app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ message: "User already exists." });
  }

  users.push({ username, email, password });
  res.status(201).json({ message: "Registration successful!" });
});

app.post("/api/posts", (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    return res.status(400).json({ message: "All fields are required." });
  }

  posts.push({ title, content, category, createdAt: new Date() });
  res.status(201).json({ message: "Post created successfully!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});