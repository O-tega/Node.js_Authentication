// import express 
const express = require('express');




//initialize express 
const app = express();



//create port
PORT = process.env.PORT || 5500



//create a local server
app.listen(PORT, ()=>{
    console.log(`Server running on http://127.0.0.1:${PORT}\nor http://localhost:${PORT}`)
})