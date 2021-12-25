import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Login from './Login';
import jwt from 'jwt-decode'
const cookieParser = require('cookie-parser')



export default async function ChangePassword(body) {

    console.log(body)
    const accessToken = jwt(localStorage.getItem("accessToken"))
     const userId= accessToken._id
     console.log(userId)
    axios
    .put(`http://localhost:8000/UpdatePassword/${userId}`, body)
    .then((res) => {
      console.log("success");
      window.location.reload(false);

    })
    .catch((err) => {
      console.log("Error!");
    });

}