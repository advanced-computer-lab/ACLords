const express = require("express");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || "8000";
const User = require('./Models/Users');

mongoose.connect("mongodb+srv://ACLords:1234qwer@airlinedb.e4p3f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));



