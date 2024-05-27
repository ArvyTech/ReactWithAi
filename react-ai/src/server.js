const express = require("express");
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");
const {Configuration, OpenAIApi} = require("openai");

// Set up the server ###

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Set Up API end point

const configuration = new Configuration({
    apikey : process.env.CHATBOT_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
    const {prompt} = req.body;

    const completion = await openai.createCompletion({
        model : "gpt-3.5-turbo-0125",
        prompt : prompt,
        max_tokens: 2048,
    });

    res.send(completion.data.choices[0].text);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server Listening on Port : ${port}`);
    console.log(`http://localhost:${port}}`);
}); 

