const mongoose = require('mongoose');
const DB_URL = process.env.MONGO_URI;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
