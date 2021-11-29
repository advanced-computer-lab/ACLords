import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Flight from './Flight';
import {v4 as uuidv4} from 'uuid';

export default function ViewFlights() {
    const [flights,setFlights] = useState([]);    
    
    useEffect(()=>{                     
        axios.get(`http://localhost:8000/ViewFlights`).then(res=>{
        setFlights(res.data);
        // console.log("shshhs");
        })
    },[]);
    
    return (
        <div className="flights-list">
        {flights.map((f, index)=>{
            
            return <Flight key={uuidv4()} data={f} />
            
            })}
        </div>
    )
}
