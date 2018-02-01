'use strict';
/**
 * This is based on the example from
 * https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
 */
const express = require('express');


// Variables for running
// Need to look why host 0.0.0.0 is use, I am unsure why?
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

// Create an object that suits a response
let responseObject = {
    status: 'SUCCESS',
    data: voteObjects
};


// Initialise the app using express
const app = express();

// Dummy hello world return to check server is running
app.get('/', (req,res) => {
    res.send('Hello World\n');
});

// Returns a JSON object to mock a ws response
app.get('/getVotes', (req, res) => {
    res.header('Content-type', 'application/json');
    res.send(JSON.stringify(responseObject)+'\n');
});

// Tell server to start listening for requests on PORT and HOST
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);