const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  flightId:{
      type: String,
      required:true
  }, 
  From: {
    type: String,
    required: false,
  },
  To: {
    type: String,
    required: false,
  },
  FlightNumber: {
    type: String,
    required: false,
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
    required: false,
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
    required: false
  },
  Passengers:{
    type: String,
    required: false
  },
  
  SeatsAvailableOnFlight:{
    type: String,
    required:false
  },

  Duration:{
    type: String,
    required:false
  },
  
  BaggageAllowance:{
    type: String,
    required:false
  },
  
  Price:{
    type: String,
    required:false
  },
  

}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;