import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react';
import {useRef} from 'react'
import Flight from './Flight';


export default function Search() {

    const [search,setsearch] = useState([]);
    const [clicked,setClicked] = useState(false);

    



    const from = useRef("");
    const departuredate = useRef("");
    const arrivaldate = useRef("");
    const date = useRef("");
    const airport = useRef("");

    function SearchMethod(){
        setClicked(!clicked);
    }
         useEffect(()=>{ 
            var body = {
                From:from.current.value,
                DepartureDate:departuredate.current.value,
                ArrivalDate:arrivaldate.current.value,
                Date:date.current.value,
                Airport:airport.current.value
             };
            axios.get("http://localhost:8000/Search",body).then(res=>{
                // console.log(res);
                setsearch(res.data);
            }).catch()
            console.log(search);
        },[clicked]);
        
        // di hetet al btala3 al search bas mhtag tzabatha
        //   axios.post("http://localhost:8000/Search",body).then(res=>{
        //      console.log(res);


    return(
        <div className='form-group'>

        <input type='text' 
        placeholder='From' ref={from} /> <br></br>

        <input type='text' 
        placeholder='Departure Date' ref={departuredate} /> <br></br>

        <input type='text' 
        placeholder='Arrival Date' ref={arrivaldate}/> <br></br>

         <input type='text' 
        placeholder='Date' ref={date}/> <br></br> 

        <input type= 'text'
        placeholder='Airport' ref={airport}/> <br></br>

        <button onClick = {SearchMethod}>Search</button>

        {search.map(s =>{return <Flight data={s}/>})}
        </div>
    )

}