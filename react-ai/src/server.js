const express = require("express");
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

// Initialize the Express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// POST endpoint
app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-002/completions",
      {
        prompt: prompt,
        max_tokens: 2048,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.CHATBOT_KEY}`,
        },
      }
    );
    res.send(response.data.choices[0].text);
  } catch (error) {
    console.error("Error with OpenAI API request:", error.response ? error.response.data : error.message);
    res.status(500).send("Error with OpenAI API request");
  }
});


// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
