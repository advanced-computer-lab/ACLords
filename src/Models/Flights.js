const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  FlightNumber: {
    type: String,
    required: true,
  },
  DepartureDate: {
    type: String,
    required: false
  },
  ArrivalDate: {
    type: String,
    required: false
  },
  // FlightDate: {
  //   type:String,
  //   required: false,
  // },
  Cabin: {
    type: String,
    required: true,
  },
  EconomySeats: {
    type: String,
    required: false,
  },
  BusinessClassSeats: {
    type: String,
    required: false
  },
  Airport: {
    type: String,
    required: true
  },
  
  SeatsAvailableOnFlight:{
    type: String,
    required:true
  }

  /*
  FlightNumber: {
    type: String,
    required: true,
  },
  DepartureDate: {
    type: Date,
    required: true
  },
  ArrivalDate: {
    type: Date,
    required: true
  },
  EconomySeats: {
    type: Number,
    required: true,
  },
  BusinessClassSeats: {
    type: Number,
    required: true
  },
  Airport: {
    type: String,
    required: true
  },
  */

}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;