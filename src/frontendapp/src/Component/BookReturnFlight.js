import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import {useState,useEffect} from 'react';
import ViewDetails from './ViewDetails';
import SearchBooking from './SearchBooking';
//import ViewFlights from './ViewFlights';


export default function BookReturnFlight(data) {                              
    
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

