import axios from 'axios';
import Login from './Login';
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
               // window.location.replace("/ViewFlights")
            }
        }
    }).catch()
}