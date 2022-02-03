const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/mongo')

// Load env vars
dotenv.config()

// Connect to database
connectDB()

// Routes
const users = require('./routes/users')

const app = express()

// JSON parser
app.use(express.json())

// Mount routers
app.use('/api/v1/users', users)

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
