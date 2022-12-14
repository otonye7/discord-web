const express = require("express");
const { readdirSync } = require("fs");
const cors = require("cors");
const http = require('http');
const mongoose = require("mongoose");
require("dotenv").config();
const socketServer = require("./socketserver");
const morgan = require("morgan");

const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .catch(err => console.log(err));
  
  
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  
  if(process.env.NODE_ENV !== 'production') require('dotenv').config()

  readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))
  

  const server = http.createServer(app)
  socketServer.registerSocketServer(server)


  server.listen(process.env.PORT || 7000, () => {
    console.log(`server is running on port 7000`)
  })