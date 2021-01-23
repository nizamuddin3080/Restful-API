/*
 *
 * Name : Md. Nizam Uddin Khondokar
 * Title : Restful-API
 * Description : A resful api application
 * Author : Nizam
 * Date : 24/01/2021
 *
 */

// Require express
const express = require('express');

const app = express();

// Require db connection
require('./db/conn');

// creating a port
const port = process.env.PORT || 3000;
// create a new student
app.post('/students', (req, res) => {
  res.send('this is a post res');
});

// create http server
app.listen(port, (error) => {
    if (error) {
        console.log('connection failed');
    } else {
        console.log(`connection setup at port no. ${3000}`);
    }
});
