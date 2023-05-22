const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/campuses', require('./api/routers/campuses'));
app.use('/api/students', require('./api/routers/students'));

module.exports = app;
