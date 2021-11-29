import React from 'react'
import Flight from './Flight';
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

        <div>
             {searchbooking.map(s => { return <Flight key = {uuidv4()}data={s} /> })}
         </div>
    )
}
