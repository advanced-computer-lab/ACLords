
const express = require("express");
const mongoose = require('mongoose');
const flightController = require('./Routes/flightController');
const userController = require('./Routes/userController');
// App variables
var cors = require('cors');
const app = express();
const port = process.env.PORT || "8000";
//const flightController = require('./Routes/flightController');

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({ origin: true, credentials: true }));

mongoose.connect("mongodb+srv://ACLords:1234qwer@airlinedb.e4p3f.mongodb.net/AirLineDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));

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



  
  app.post('/CreateFlight', flightController.addFlight)

  // app.get("/CreateFlight",(req , res)  =>{
  //   res.send('flightController.addFlight')
  // });

  app.get("/ViewFlights",flightController.viewFlights);
  
  app.get("/Trial2",(req , res)  =>{
    res.render('Trial2')
  });

  app.get("/",(req , res)  =>{
    res.send("hello")
  });

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });