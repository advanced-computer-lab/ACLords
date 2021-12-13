const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FirstName: {
    type: String,
    required: false,
  },
  LastName: {
    type: String,
    required: false,
  },
  Email: {
    type: String,
    required: false
  },
  Password: {
    type: String,
    required: false
  },
  Age: {
    type: Number,
    required: false,
  },
  DateOfBirth: {
    type: Date,
    required: false
  },
  Nationality: {
    type: String,
    required: false
  },
  MobileNumber: {
    type: String,
    required: false
  },
  Job: {
    type: String,
    required: false
  },
  PassportNumber: {
    type: String,
    required: false
  }
}
  , { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;