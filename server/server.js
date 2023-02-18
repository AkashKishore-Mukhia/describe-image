const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT;
const app = express();

// middlewares
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
// router for /openai/createImage;
app.use('/openai', require('./routes/openaiRoutes.js'));

app.listen(port || 4000, () => {
  console.log(`server is listening on port ${port}`);
})