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
// const allowedOrigins = ['http://localhost:3000', 'https://mernfe.vercel.app/signin'];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps, curl requests)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
app.use(cors())
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
  
