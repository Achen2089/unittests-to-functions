const dotenv = require('dotenv');
dotenv.config();

const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI,
});

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/convert', async (req, res) => {
    const tests = req.body.tests;
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a powerful tool that convert python unittests into clean python functions that perform what the tests are covering. Make sure the covered code are not tests. The code should be clean code that can be run and any aside should be a comment." }, 
                { role: "user", content: tests }],
                model: "gpt-3.5-turbo",
            });
        
        const code = completion.choices[0].message.content;
        res.send({ code });

    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong');
    }
});

app.listen(8080, () => console.log('Convert python unittests to python code http://localhost:8080/convert'));