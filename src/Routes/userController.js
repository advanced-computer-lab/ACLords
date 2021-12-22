const User = require('../models/Users');
const bcrypt = require('bcrypt');

exports.addUser = async (req, res) => {
  User.find({ Email: req.Email })
  .then(async result =>{
    if(result[0] == null){
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(req.Password, salt)
      const user = await new User({
        FirstName: req.FirstName,
        LastName: req.LastName,
        Email: req.Email,
        CountryCode: req.CountryCode,
        TelephoneNumber: req.TelephoneNumber,
        PassportNumber: req.PassportNumber,
        Password: hashedPassword
      }
      )
      user.save()
        .then(result => {
          res.send(result);
          console.log("added");
        })
        .catch(err => {
          console.log(err);
        }); 
    }
    else{
      res.send("No")
      // window.alert("This email is already registered! Please try to Login or register with a new email.")
    }
  })
  
};

// getting all the users

exports.viewUsers = (req, res) => {
  User.find({})
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.updateUser = (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  User.findByIdAndUpdate(req.params.id, req.body).then(result => {
    res.status(200).send("User updated ");
    console.log('The User is Updated successfully !');
  }).catch(err => {
    console.log(err);
  });

};

//Deleting an existing user
exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id).then(result => {

    res.status(200).send("User Deleted ");
    console.log("The User is deleted successfully !");
  }).catch(err => {
    console.log(err);
  });

};