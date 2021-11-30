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
  }
  

}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;