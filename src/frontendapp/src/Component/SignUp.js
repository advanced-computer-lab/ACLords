import axios from 'axios';
export default function SignUp(body){

    axios.post("http://localhost:4000/SignUp", body).then(res => {
        console.log(res);
    }).catch()
}