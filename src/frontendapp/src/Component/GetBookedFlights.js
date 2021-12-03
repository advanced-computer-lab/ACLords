import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyFlight from './MyFlight';
import { v4 as uuidv4 } from 'uuid';
import Reservation from './Reservation';
import MyFlights from './MyFlights'

export default function GetBookedFlights(data) {
   
    var body = {
        userId: '61a6391f7053ae7baba4fb03'
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