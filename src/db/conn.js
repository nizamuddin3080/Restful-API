/*
 *
 * Name : Md. Nizam Uddin Khondokar
 * Title : Restful-API
 * Description : A resful api application
 * Author : Nizam
 * Date : 24/01/2021
 *
 */

// require mongoose
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
  })
    .then(() => {
        console.log('connected');
  })
    .catch((error) => {
        console.log('connection failed');
  });
