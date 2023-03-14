const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.port;
const app = express();

// middlewares
// app.use(cors({
//   origin: 'https://describe-image.pages.dev',
// }))

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://describe-image.pages.dev')
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// }) 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends: false}))
// router for /openai/createImage;
app.use('/openai', require('./routes/openaiRoutes.js'));

app.get('/', (req, res) => {
  return res.send({message: 'this root get is woriking fine'});
})

app.listen(PORT || 4000, () => {
  console.log(`server is listening`);
})