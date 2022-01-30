const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongo');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
