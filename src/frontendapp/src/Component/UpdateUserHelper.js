import React from 'react'
import UpdateUser from './UpdateUser'
import axios from 'axios';
import { useState, useEffect } from 'react';

import jwt from 'jwt-decode'
require('dotenv').config()
//const jwt = require('jsonwebtoken');


export default function UpdateUserHelper() {
    const accessToken =localStorage.getItem("accessToken")

    var UserId = jwt(accessToken)._id
    
    const [myUser, setMyUser] = useState({});
    useEffect(() => {

        axios.get(`http://localhost:8000/User/${UserId}`).then(


            res => {
                setMyUser(res.data);
                console.log(res)

            }


        ).catch(err => console.log(err));
    }, [])

    return (
        <UpdateUser User={myUser} />
    )
}