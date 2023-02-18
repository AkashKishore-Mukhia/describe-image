const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const port = 4000;
const app = express();

// middlewares
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
// router for /openai/createImage;
app.use('/openai', require('./routes/openaiRoutes.js'));

app.use('/', (req, res) => {
  res.send({message: 'this root get is woriking fine'});
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})