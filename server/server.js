const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
// router for /openai/createImage;
app.use('/openai', require('./routes/openaiRoutes.js'));

app.listen(port || 4000, () => {
  console.log(`server is listening on port ${port}`);
})