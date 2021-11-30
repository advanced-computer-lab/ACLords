import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import {useState,useEffect} from 'react';
import ViewDetails from './ViewDetails';
import SearchBooking from './SearchBooking';
//import ViewFlights from './ViewFlights';


export default function BookFlight(data) {                              
    // console.log("out");
    useEffect(()=>{  
        // console.log(data);                   
        axios.get(`http://localhost:8000/ViewDetails/${data.location.state._id}`).then(res=>{
        // console.log(res.data);
        // console.log(flight);
        })
    },[]);


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

