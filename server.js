const express = require('express')
const app =express();
const cors = require('cors')
const mongoose =require('mongoose')


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anildev:onemanarmy456@cluster0.0uafa.mongodb.net/sample_mflix?retryWrites=true&w=majority")

app.use("/" , require("./routes/noteRoute"))

app.listen(3001 ,console.log('api is running'))