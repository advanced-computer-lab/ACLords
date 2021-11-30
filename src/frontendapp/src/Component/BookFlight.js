import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import {useState,useEffect} from 'react';
import ViewDetails from './ViewDetails';
import SearchBooking from './SearchBooking';
//import ViewFlights from './ViewFlights';


export default function BookFlight(data) {                              
    console.log("out");
    console.log(data)
    console.log("in");
    var body = {
        userId: '61a6391f7053ae7baba4fb02',
        flightId: data.location.state._id
    };

    useEffect(()=>{  
        axios.post("http://localhost:8000/CompleteBooking/", body).then(res => {
            console.log(res);
        }).catch()
        }, []);
   
        var bodysearch = {
            From:data.location.state.To,
            To:data.location.state.From
    
        };

    return (
        <div>
            <SearchBooking body={bodysearch}/>

        </div>
    )
}

