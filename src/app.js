
const express = require("express");
const mongoose = require('mongoose');
const flightController = require('./Routes/flightController');
const userController = require('./Routes/userController');
const bodyparser = require("body-parser");
const app = express();
// App variables
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())
const bodyParser = require("body-parser");

const port = process.env.PORT || "8000";

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.urlencoded({
  type: 'application/*+json'
}))
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://ACLords:1234qwer@airlinedb.e4p3f.mongodb.net/AirLineDB?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));

app.use(cors());


app.get("/edit", (req,res)=>{
  res.render('EditFlight')
})
  
  app.get("/", (req,res) => {
    res.render('Home')
  })
  app.post("/CreateFlight", flightController.addFlight)
  app.post("/Search",flightController.searchFlights);
  app.get("/ViewFlights",flightController.viewFlights);
  app.put("/UpdateFlights/:id",flightController.updateFlight);
  app.put("/DeleteFlight/:id",flightController.deleteFlight);
  app.get("/ViewDetails/:id",flightController.viewdetails);
  app.post("/ViewDetails/BookFlight/:id",flightController.bookFlight);



app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });