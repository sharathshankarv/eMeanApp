var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path')
var app = express();
const route = require('./routes/route');


const port = 3000;

mongoose.connect('mongodb://localhost:27017/myApp');

mongoose.connection.on('connected',()=>{
    console.log('connected to mongoD successfully');
})

mongoose.connection.on("error", (err)=>{
    console.log("error occured while conneting: " + err);
})

app.use(cors());
app.use(bodyParser.json());
app.use('/api', route);
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res)=>{
    res.send("Your app is Printing");
})

app.listen(port, ()=>{
    console.log("Server started at port: " + port);
})