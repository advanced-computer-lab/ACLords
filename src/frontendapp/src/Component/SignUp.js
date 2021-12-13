export default function SignUp(){
    axios.post("http://localhost:4000/SignUp", body).then(res => {
        console.log(res);
    }).catch()
}