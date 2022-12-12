const express = require('express');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  try {
    const {description, size, imageQuantity} = req.body;
  
    const imageSize = 
          size === 'small' ? '256x256' : size === 'medium' ? '512x512': '1024x1024';
  
    const response = await openai.createImage({
      prompt: description,
      n: parseInt(imageQuantity),
      size: imageSize,
    })
    const imageUrl = response.data.data;
    res.send({
      "imageurl" : imageUrl
    })
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    // res.status(400).json({
    //   success: false,
    //   error: 'The image could not be generated',
    // });
  }
}

module.exports = {generateImage};
