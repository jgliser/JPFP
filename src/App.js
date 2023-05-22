const express = require('express');
const app = express();
const cors = require('cors');
const campusRouter = require('../api/routers/campuses');
const studentRouter = require('../api/routers/students');

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/campuses', campusRouter);
app.use('/api/students', studentRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
