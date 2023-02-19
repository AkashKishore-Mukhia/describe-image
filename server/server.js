const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const port = 4000;
const app = express();

// middlewares
app.use(cors({
  origin: 'http://localhost:3000',
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}) 

app.use(bodyParser.json());
app.use(express.urlencoded({extends: false}))
// router for /openai/createImage;
app.use('/openai', require('./routes/openaiRoutes.js'));

app.get('/', (req, res) => {
  return res.send({message: 'this root get is woriking fine'});
})

app.listen(process.env.PORT || port, () => {
  console.log(`server is listening on port ${port}`);
})