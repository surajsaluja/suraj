var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8000; 				// set the port
var database1 = require('./config/database'); 			// load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routeReg=require('./app/Restaurant_api');
//-----------------------------------//
                   
mongoose.connect(database1.database);
app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); // parse application/json

app.use('/',routeReg);

//=======================

app.listen(port);
console.log("Server Running At "+port);
