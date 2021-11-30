import React from 'react'
import ReturnFlight from './ReturnFlight';
import { useState, useEffect } from 'react';
import Search from './Search';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';


export default function SearchBooking({body}) {
    // console.log("here");
    // console.log(body);
    const [searchbooking, setSearchbooking] = useState([]);

            
          useEffect(()=>{
            console.log(body);

            axios.post("http://localhost:8000/Search", body).then(res => {
                console.log(res.data);
                setSearchbooking(res.data);
            }).catch(err => console.log(err))


          },[])
    return (
        <><h1>Return Flights</h1><div>
            {searchbooking.map(s => { return <ReturnFlight key={uuidv4()} data={s} />; })}
        </div></>
    )
}
