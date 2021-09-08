const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// how to find the files in server.js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // links html and css files

const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

// turn on routes
app.use(apiRoutes);
app.use(htmlRoutes);

// turn on connection to db and server
app.listen(PORT, () => console.log('Now listening'));

