import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Login from './Login';
import ChangePassword from './ChangePassword'
import jwt from 'jwt-decode'
const cookieParser = require('cookie-parser')



export default function CheckPassword(body) {

    const passThis ={
        Email: body.Email,
        Password: body.Password
    }
    axios.post("http://localhost:4000/Login", passThis).then(res => {
        console.log(res);
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        
        if (res.data == "Password is incorrect") {
            window.alert("Password is incorrect")

        }
        else{
            ChangePassword({Password: body.NewPassword})
            console.log("password changed")
        }
        
    }).catch()
}