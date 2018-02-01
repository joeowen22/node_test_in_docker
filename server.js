'use strict';

const express = require('express');


// Constants
const HOST = '0.0.0.0';
const PORT = 8080;

// Dummy app return to return a vote object
let voteObjects = {
    votes: [
        {estimate: 1, count: 2},
        {estimate: 2, count: 5},
        {estimate: 3, count: 1}
    ]
};

let responseObject = {
    status: 'SUCCESS',
    data: voteObjects
};

const app = express();
app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/getVotes', (req, res) => {
    res.header("Content-type", "application/json");
    res.send(JSON.stringify(responseObject));
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);