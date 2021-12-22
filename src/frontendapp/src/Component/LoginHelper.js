import axios from 'axios';
export default function LoginHelper(body){

    axios.post("http://localhost:4000/Login", body).then(res => {
        console.log(res);
    }).catch()
}