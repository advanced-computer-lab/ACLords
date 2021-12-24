import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyFlight from './MyFlight';
import Reservation from './Reservation';
import { v4 as uuidv4 } from 'uuid';
import emailjs from 'emailjs-com'
import {init} from 'emailjs-com'
const serviceID = 'service_v0sodfb';
const templateID = 'template_cvxmx8m';
const userID = 'user_Nl7YFcYSW6N1aedtILZHr';

export default function MyFlights(reservations) {

    function handleSummary(){
        emailjs.send(serviceID,templateID,{to_name: "Dani",listid: "12wq",send_to: "danial.amir97@gmail.com",});
    }

    console.log(reservations)
    const [flights, setFlights] = useState([]);

    useEffect(() => {
            axios.get(`http://localhost:8000/MyFlights`).then(res => {
                console.log(res);
                setFlights(res.data)
            })
        
    }, [])
console.log(flights)
console.log("de el flights")
    return (
        <div className="flights-list">
            {flights.map((f, index) => {

                return <Reservation key={uuidv4()} data={f} />

            })}
            <button type="button" onClick={handleSummary} varian="outlined">
                Email me summary
            </button>
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