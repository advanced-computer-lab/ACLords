import React from 'react'
import ReturnFlight from './ReturnFlight';
import { useState, useEffect } from 'react';
import Search from './Search';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

export default function SearchBooking({body}) {
    const [searchbooking, setSearchbooking] = useState([]);

          useEffect(()=>{
            axios.post("http://localhost:8000/Search", body).then(res => {
                console.log(res.data);
                setSearchbooking(res.data);
            }).catch(err => console.log(err))
          },[])
          console.log(searchbooking)
          console.log("da el search")

    return (
        <><h1>Return Flights</h1><div>
            {searchbooking.map(s => { return <ReturnFlight key={uuidv4()} data={s} />; })}
        </div></>
    )
}
