const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to my application"});
});


app.listen(port,() => {
    console.log("Server is listening on port 3000");
});

const dbConfig = require('./app/config/database.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the db', err);
    process.exit();
});