import axios from 'axios';
import LoginHelper from './LoginHelper';
export default function SignUp(body){

    axios.post("http://localhost:4000/SignUp", body).then(res => {
        console.log(res);
        const loginCredentials ={
            Email: res.data.Email,
            Password: res.data.Password
        }
        LoginHelper(loginCredentials)
        window.open("/ViewFlights")
    }).catch()
    
    
    //LoginHelper(loginCredentials)
}