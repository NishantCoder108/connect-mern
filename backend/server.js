const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv");
// const connectDB =require("./config/db.js");
const colors =require ('colors')
const mongoose= require("mongoose");

//


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/entrepreneurship-network', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      dbName: "entrepreneurship-network",
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};


//
connectDB();

const app = express();
app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use(cors())
app.use(express.json())


app.use("/api/ten/" , require("./routes/noteRoute"))

const PORT = process.env.PORT || 3001;
app.listen(
  PORT,
  console.log(
    `Server is running on port ${process.env.NODE_ENV} MODE on port ${PORT}`
      .yellow.bold
  )
);