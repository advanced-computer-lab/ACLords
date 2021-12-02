import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyFlight from './MyFlight';
import { v4 as uuidv4 } from 'uuid';

export default function MyFlights(reservations) {

    const [flights,setFlights] = useState([]);    

        useEffect(() => {
            axios.get(`http://localhost:8000/ViewFlights`).then(res =>{
                console.log(res);
                setFlights(res.data)
            })

        })

    return (
        <div className="flights-list">
            {flights.map((f, index) => {

                return <MyFlight key={uuidv4()} data={f} />

            })}
        </div>

    )

    // useEffect(() => {
    //     axios.post(`http://localhost:8000/MyFlights`, body).then(res => {
    //         console.log("Test2")
    //         console.log(res.data.length);
    //         for (let index = 0; index < res.data.length; index++) {
    //             console.log("Test3")
    //             const flightId = res.data[index].flightId;
    //             const body = {
    //                 _id: flightId
    //             }
    //             console.log(body)
    //             axios.post(`http://localhost:8000/Search`, body).then(res => {
    //                 console.log(res);
    //                 myFlights[index] = res.data;
    //                 console.log(myFlights);
    //             })
    //         }
    //         console.log("Test4")
    //     }).catch(err => console.log(err));
    // }, []);
    // setFlights(myFlights);

   

}