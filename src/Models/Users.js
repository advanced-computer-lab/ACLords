const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true
  },
  Nationality: {
    type: String,
    required: true
  },
  MobileNumber: {
    type: String,
    required: true
  },
  Job: {
    type: String,
    required: true
  },
  PassportNumber: {
    type: String,
    required: true
  }
}
  , { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;