const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// security
const helmet = require('helmet');
const xssCleaner = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');


// mid
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true,
  parameterLimit: 50000
}));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(xssCleaner());
app.use(mongoSanitize());
app.use(hpp());


app.get("/", (req, res) => {
  res.status(200).json({
    msg: "this is click shop course server for you ..."
  });
});
//routes
const MidBanRoutes=require('./routes/MiddleBannerRoutes');

//routes middleware
app.use('/api',MidBanRoutes)


const PORT = process.env.PORT;
const URL = process.env.URL;

mongoose.connect(URL)
  .then(d => {
    console.log('ok');
    app.listen(PORT);
  })
  .catch(err => console.log(err));