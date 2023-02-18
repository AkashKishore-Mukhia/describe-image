const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin: 'https://long-pear-turtle-tam.cyclic.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
// router for /openai/createImage;
app.use('/openai', require('./routes/openaiRoutes.js'));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})