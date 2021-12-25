import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Login from './Login';
import jwt from 'jwt-decode'
const cookieParser = require('cookie-parser')


export default function LoginHelper(body) {

    axios.post("http://localhost:4000/Login", body).then(res => {
        console.log(res);
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        
        if (res.data == "Password is incorrect") {
            window.alert("Password is incorrect")
        }
        else {
            if (res.data == "Email does not exist. Please create new account.") {
                window.alert("Email does not exist. Please create new account.")
            }
            else {
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("refreshToken", refreshToken)
                
                if(jwt(accessToken).Email === "Admin"){
                    window.location.replace("/")
                }
                else{
                window.location.replace("/ViewFlights")
            }}
        }
    }).catch()
}