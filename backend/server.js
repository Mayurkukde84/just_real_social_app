require("dotenv").config();
const express = require("express");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', require('./routes/authRoute'))

const URI = process.env.URI;

mongoose.connect(
  URI,
  { useNewUrlParser:true,
    useUnifiedTopology: true
    
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to the mongoose");
  }
);



app.listen(port, console.log("server is runing on 5000"));
