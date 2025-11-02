import express from 'express';

const app = express();

// Simple middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Main route that definitely shows your student ID
app.get('/', (req, res) => {
  res.send('My Student ID is 21938690. Welcome to Express');
});

// Health check route
app.get('/health', (req, res) => {
  res.send('OK');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
