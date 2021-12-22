import axios from 'axios';
import Login from './Login';
export default function LoginHelper(body) {

    axios.post("http://localhost:4000/Login", body).then(res => {
        console.log(res.data);
        if (res.data == "Password is incorrect") {
            window.alert("Password is incorrect")
        }
        else {
            if (res.data == "Email does not exist. Please create new account.") {
                window.alert("Email does not exist. Please create new account.")
            }
            else {
                window.open("/ViewFlights")
            }
        }
    }).catch()
}