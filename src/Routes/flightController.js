const Flight = require('../models/Flights');
// const search = require('../Component/Search');
exports.addFlight = (req, res) => {
    
    const flight = new Flight(req.body)
  
    flight.save()
      .then(result => {
        res.send(result);
        console.log("added");
      })
      .catch(err => {
        console.log(err);
      });
  };
// getting all the flights

exports.viewFlights = (req, res) => {                                               ``
    Flight.find({
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
    };
    
    exports.bookFlight = (req, res) => {                                               
      console.log("ta2reban kda")
    Flight.findById(req.params.id)
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
    };

    exports.searchFlights = (req, res) => { 
    Flight.find(req.body)
      .then(result => {        
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
    };


    



    exports.getFlight = (req, res) => {
      Flight.find({Name:req.params.name})
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
    };


    exports.viewdetails = (req, res) => {
      Flight.findById(req.params.id)
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
    };


    exports.updateFlight = (req,res)=>{
      Flight.findByIdAndUpdate(req.params.id,req.body).then(result =>{
  
          res.status(200).send("Flight updated ");
          console.log('The Flight is Updated successfully !');
      }).catch(err => {
          console.log(err);
        });
  
     };

    exports.UpdateFlights = (req,res) => {
      Flight.findByIdAndUpdate(req.params.id , req.body)
      .then(result =>{
        res.status(200).send("Flight Updated ")
      })
      .catch(err =>{
        console.log(err);
      })
    }


  
    //Deleting an existing Flight
    exports.deleteFlight = (req,res)=>{
      Flight.findByIdAndDelete(req.params.id)
      .then(result =>{
          res.status(200).send("Flight Deleted!");
      }).catch(err => {
          console.log(err);
        });
  
    };