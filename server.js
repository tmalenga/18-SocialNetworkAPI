const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001

const db = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialMediaAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);


app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));