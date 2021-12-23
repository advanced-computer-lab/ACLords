import axios from 'axios';
import LoginHelper from './LoginHelper';
export default function SignUp(body){

    axios.post("http://localhost:4000/SignUp", body).then(res => {
        if(res.data === "No"){
            window.alert("This email is already registered! Please try to Login or register with a new email.")
        }
        else{
        window.location.replace("/Login")
        window.alert("User Created successfully, please login to continue")
    }
    }).catch()

    //LoginHelper(loginCredentials)
}