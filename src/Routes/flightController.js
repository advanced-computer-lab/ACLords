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

    exports.searchFlights = (req, res) => { 
            console.log(req.body);
            console.log("222222222222222");
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

    // exports.updateFlight = (req,res)=>{
    //   Flight.findByIdAndUpdate(req.params.id,req.body).then(result =>{
  
    //       res.status(200).send("Flight updated ");
    //       console.log('The Flight is Updated successfully !');
    //   }).catch(err => {
    //       console.log(err);
    //     });
  
    // };

    exports.UpdateFlights = (req,res) => {
      console.log("kkkk" + req.params.id);
      console.log("RRRR" + req.body);
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
      Flight.findByIdAndRemove(req.params.id).then(result =>{
  
          res.status(200).send("Flight Deleted ");
          console.log("The Flight is deleted successfully !");
      }).catch(err => {
          console.log(err);
        });
  
    };