import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Flight from './Flight';

export default function ViewFlights() {
    
    const [flights,setFlights] = useState([]);    
    
    useEffect(()=>{                     

        axios.get(`http://localhost:8000/ViewFlights`).then(res=>{
        setFlights(res.data);


        })

    },[]);
    
    return (
        flights.map(f=>{return <Flight data={f}/>})

    )
}
