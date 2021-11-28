import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react';
//import ViewFlights from './ViewFlights';


export default function BookFlight(data) {
    const [flight,setFlight] = useState([]);    
    
    useEffect(()=>{                     
        axios.post(`http://localhost:8000/ViewDetails/BookFlight/${data.location.state}`).then(res=>{
            console.log(res.data)
            console.log("ana henaaaaa")
        setFlight(res.data);
        console.log(flight);
        })
    },[]);

    return (
        <div>Book Me : {flight}</div>
    )
}

