
const express = require("express");
const mongoose = require('mongoose');
const flightController = require('./Routes/flightController');
const userController = require('./Routes/userController');
const bodyparser = require("body-parser");

// App variables
var cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || "8000";
//const flightController = require('./Routes/flightController');

// app.use(express.urlencoded({extended: true}));
// app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.urlencoded({
  type: 'application/*+json'
}))
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://ACLords:1234qwer@airlinedb.e4p3f.mongodb.net/AirLineDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));


app.use(cors());
// app.set('view engine', 'ejs');

// const admin = new User({Name: 'Adminstrator',  
// Email:"admin@gmail.com" ,
// Age: 22 ,
// BornIn: "Admin",
// LivesIn: "Admin", 
// MartialStatus:"Admin",
// PhoneNumber: "0101111002",
// Job: "Admin"
// } , { timestamps: true });

// admin.save();



app.get("/createstudent",(req , res)  =>{
    res.send(admin)
  });


app.get("/edit", (req,res)=>{
  res.render('EditFlight')
})
  
  app.post('/CreateFlight', flightController.addFlight)
  app.post("/Search",flightController.searchFlights);
  // app.get("/CreateFlight",(req , res)  =>{
  //   res.send('flightController.addFlight')
  // });

  app.get("/ViewFlights",flightController.viewFlights);
  
  app.get("/",(req , res)  =>{
    res.send("This is the empty page pliz re-direct to something")
  });

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });