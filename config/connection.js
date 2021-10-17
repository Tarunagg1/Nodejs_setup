'use strict';

const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dbname = process.env.DB_NAME;

const connectionString = `mongodb://${host}:${port}/${dbname}`;

const options = { keepAlive: 1, useNewUrlParser: true};
try {
    mongoose.connect(connectionString, options).then(err => {
        console.log('Mongo Connection establish');
    });
} catch (e) {
    console.log(' Mongo Connection Error:', e);
    return logger.error(' Mongo Connection Error:', err);
}
