const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn =  mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    // ${conn.connection.host}
    console.log(`MongoDB Connected: `.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;