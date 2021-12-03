import React from 'react'
import UpdateUser from './UpdateUser'
import axios from 'axios';
import {useState,useEffect} from 'react';


export default function Login() {
    const UserId = "61a639667053ae7baba4fb03";
    const [myUser,setMyUser] = useState({});   
    useEffect(() => {

        axios.get(`http://localhost:8000/User/${UserId}`).then(

        res =>{
            setMyUser(res.data);
            console.log(res)

        }


).catch(err => console.log(err));
    },[])

    return (
      <UpdateUser User={myUser}/>
    )
}