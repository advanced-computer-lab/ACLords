import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyFlight from './MyFlight';
import { v4 as uuidv4 } from 'uuid';
import Reservation from './Reservation';
import MyFlights from './MyFlights'
import jwt from 'jwt-decode'

export default function GetBookedFlights(data) {
    const accessToken =localStorage.getItem("accessToken")

    var UserId = jwt(accessToken)._id
    var body = {
        userId: UserId
    }
    const [reservations,setReservations] = useState([]);    
    
    useEffect(()=>{                     
        axios.post(`http://localhost:8000/GetBookedFlights`, body).then(res=>{
        setReservations(res.data);
        })
    },[]);
    console.log(reservations);
    return(
<div className="flights-list">
        {reservations.map((r, index)=>{
            
            return <Reservation key={uuidv4()} data={r} />
            
            })}
        </div>   )
}