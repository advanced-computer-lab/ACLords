const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
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

}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;