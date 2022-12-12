const express = require('express');
const {generateImage} = require('../imageGenerator/imageGenerator.js')

const router = express.Router();
router.post('/createImage', generateImage)

module.exports = router;