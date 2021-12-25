import axios from 'axios';

import jwt from 'jwt-decode'

export default function Logout() {

    localStorage.clear()

       
        axios.delete("http://localhost:4000/logout/").then(res => {
            console.log(res);
        }).catch()
    
window.location.replace("/")
}
