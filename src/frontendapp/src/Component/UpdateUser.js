import React from 'react';
import axios from 'axios'
import { useRef} from 'react';
import {useState} from 'react';

 

export default function UpdateUser({User}) {
// initialize useRef to be used in input
  const firstName = useRef();
  const lastName = useRef();
  const passportNumber = useRef();
  const email = useRef();
  function passClick(){
    window.location = 'http://localhost:3000/ChangePass'
  }


  function updateClick() {
      // empty updated user json
    var newUser = {};

    //adding only changed values of user to be updated
    if(firstName.current.value!==""){
        newUser["FirstName"] = firstName.current.value;
    }
    if(lastName.current.value!==""){
        newUser["LastName"] = lastName.current.value;
    }
    if(passportNumber.current.value!==""){
        newUser["PassportNumber"] = passportNumber.current.value;
    }
    if(email.current.value!==""){
        newUser["Email"] = email.current.value;
    }

    console.log(newUser)
    console.log("da new user")
    //sending axios request to back end to update the user
    axios
      .put(`http://localhost:8000/UpdateUser/${User._id}`, newUser)
      .then((res) => {
        console.log("success");
        window.location.reload(false);

      })
      .catch((err) => {
        console.log("Error!");
      });

  }

  return (
    <div className='form-group'>
      <label>First Name: </label>
      <input type='text' placeholder={User.FirstName} ref={firstName} /> <br></br>
      <label>Last Name: </label>
      <input type='text' placeholder={User.LastName} ref={lastName} /> <br></br>
      <label>Passport Number: </label>
      <input type='text' placeholder={User.PassportNumber} ref={passportNumber} /> <br></br>
      <label>Email: </label>
      <input type='text' placeholder={User.Email}  ref={email} /> <br></br>


      <button onClick={updateClick}>Update Profile</button>
      <button onClick={passClick}>Change Password</button>
      


    </div>




  )

};