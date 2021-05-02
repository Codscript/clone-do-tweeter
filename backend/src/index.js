const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);;

mongoose.connect('mongodb+srv://2020rfl:2020rfl@cluster0.bqgcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});