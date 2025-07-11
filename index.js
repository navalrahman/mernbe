const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config()
const bodyParser = require('body-parser');
const courseRoute = require('./routes/courseRoute')
const userRoute = require('./routes/userRoute')

const app = express()
app.use(bodyParser.json())
// app.use(cors())

app.use(cors({
  origin: "https://mern-stack-fe-eta.vercel.app/",
  credentials: true
}));
dotenv.config()
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })


  const PORT = process.env.PORT || 7000;
  const URL = process.env.MONGO_URI;
  
  
  mongoose.connect(URL).then(() => {
      console.log('DB connected successfully');
  
      app.listen(PORT, () => {
          console.log(`server is running on port:${PORT}`);
      })
  
  }).catch((err) => console.log(err))

  app.get('/', (req,res) => {
    res.send('hello')
  })

  app.use('/api/course', courseRoute)
  app.use('/api/user', userRoute)
  
