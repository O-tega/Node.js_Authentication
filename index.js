// install express;
const express = require('express')
const path = require('path')

//import mongoose
const mongoose = require('mongoose');
const loginRoutes = require('./routes/login.routes');
const signupRoutes = require('./routes/signup.routes');

// initialize express
const app = express()


app.set('view engine', 'ejs')

// ejs middleware
app.use(express.json())
//Body parser
app.use(express.urlencoded({ extended: false }))

// create a static directory
app.use(express.static(path.join(__dirname, 'pages')))
app.use(express.static(path.join(__dirname, "assets")))

app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);

app.use((req, res, next)=>{
  req.server_url = "http://localhost:5000/";
  next();
})

//create a port
PORT = process.env.PORT || 5000

// connect mongoose
mongoose
  .connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database is connected successfully')
  })
  .catch((err) => {
    console.log('Error: ', err)
  })

app.listen(PORT, () => {
  console.log(
    `server started at http://127.0.0.1:${PORT}\nor server running at http://localhost:${PORT}`
  )
})
