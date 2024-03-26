const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

const user = require("./router/userRoute");

app.use("/api/v1",user)

module.exports = app;