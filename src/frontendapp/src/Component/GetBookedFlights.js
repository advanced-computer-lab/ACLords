import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyFlight from './MyFlight';
import { v4 as uuidv4 } from 'uuid';
import Reservation from './Reservation';
import MyFlights from './MyFlights'

export default function GetBookedFlights() {
    const [reservations,setReservations] = useState([]);    
    
    useEffect(()=>{                     
        axios.get(`http://localhost:8000/GetBookedFlights`).then(res=>{
        setReservations(res.data);
        // console.log("shshhs");
        })
    },[]);
    return(
   MyFlights(reservations)
   )
}