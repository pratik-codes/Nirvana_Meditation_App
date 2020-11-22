// importing libs
var express = require("express");
var mongoose = require("mongoose");
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');
var mongo = require('mongodb');
const { assert } = require("console");
const user_data = require('./db_schema.js');



// app config
// this contains all the configurations of our app
var app = express();
const port = process.env.PORT || 9000;

// middleware
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json());
app.use('/public', express.static('public', { root: __dirname }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 


// database 
// This contains all the database realted stuff like the connecting key and making the connection to our DB which is mongoDB
const connection_url = "mongodb+srv://Admin:9nKu79m53VNWSKi@cluster0.zphm8.mongodb.net/Nirvana-Form-Data?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

    db.once('open', () => {
        console.log("DB connected")
    });
    const User_Data = db.collection('user_data');

// API routes
// we make API's here
app.get('/',function(req,res){
    res.sendFile('index.html', { root: __dirname });
});




app.post("/contact", (req, res) => {
    const Data = req.body
    console.log("New data added: " + Data);
    
    const new_user_data = new user_data(Data);    

    new_user_data.save((error) => {
        if (error) {
            res.status(500).json({msg: 'Sorry, internal server error'});
        } else {
            res.sendFile('index.html', { root: __dirname });
            console.log(" New Data Added to MongoDB")
        }
    });

});
    

//listener
app.listen(port,() =>console.log(`Listening on localhost:${port}`));


  