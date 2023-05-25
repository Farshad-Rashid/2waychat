// Server-side JavaScript using Node.js and Express

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let messages = [];

// Endpoint to handle receiving and storing messages
app.post("/messages", (req, res) => {
    const message = req.body.message;
    messages.push(message);
    console.log("Received message:", message);
    res.sendStatus(200);
});

// Endpoint to retrieve messages
app.get("/messages", (req, res) => {
    res.json({ messages });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
