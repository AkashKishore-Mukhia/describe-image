# describe-image

<img src="./client/public/screen.png">

# usage
Rename the `example.env` file to `.env`.<br/>
Generate the `API_KEY` at <a href='https://beta.openai.com'>OpenAi</a> and add it to the `.env` file,<br/>
also add the port number at `PORT` varibale in `.env` file.

Install dependecies
```sh
npm install
```

Run server
```sh
npm run server
```
then visit `http://localhost:4000/` in you browser.

The endpoint is at `POST http://localhost:4000/openai/create-image`.


# generate image
<img src="./client/public/search.png">

1. describe the image you want to generate.
2. select the size of the images `(small, medium, large)`
3. input number of images you want by the range input slider `between 1 to 5` `(default is set to 1)`.

Finally hit `Generate` button.
