require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./connection');
const helmet = require('helmet');

const mainRoutes = require('../api/router');

const app = express();
// require('../lib/logger/logger');

// const {logrequest} = require('../middleware/logStore') 

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'))


app.use(cors({
    origin: '*'
}))

app.use(helmet());

/**
 * Routes
 */
app.get('/', (req, res) => {
    return res.send("doctor app server");
})


app.use('/api/',mainRoutes);

module.exports =app;