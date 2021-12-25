import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyFlight from './MyFlight';
import { v4 as uuidv4 } from 'uuid';
import Reservation from './Reservation';
import MyFlights from './MyFlights'
import jwt from 'jwt-decode'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
const serviceID = 'service_v0sodfb';
const templateID = 'template_cvxmx8m';
const userID = 'user_Nl7YFcYSW6N1aedtILZHr';


export default function GetBookedFlights(data) {
    const accessToken = localStorage.getItem("accessToken")

    var UserId = jwt(accessToken)._id
    var body = {
        userId: UserId
    }
    function handleSummary() {
        var flightStr="";
        if(reservations.length==0){
            flightStr="Sorry, it seems like that you don't have any reserved flights"
        }else{
           // flightStr = reservations;
            for (var j = 0; j < reservations.length; j++) {

                flightStr+="Flight:"+ (j+1)+", ";
                flightStr=flightStr + " From:"+ reservations[j].From +", To:"+ reservations[j].To+", Flight Number:"+reservations[j].FlightNumber
                flightStr=flightStr +" ----------------------------------------------------- "
            }

        }
        var UserId = jwt(accessToken)._id
        var name = jwt(accessToken).FirstName
        var email = jwt(accessToken).Email
        emailjs.send(serviceID, templateID, { to_name: JSON.stringify(name), listid: JSON.stringify(flightStr), send_to: JSON.stringify(email) }, userID)
    }
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.post(`http://localhost:8000/GetBookedFlights`, body).then(res => {
            setReservations(res.data);
        })
    }, []);
    console.log(reservations);
    return (
            <div className="flights-list">
                <button type="button" onClick={handleSummary} variant="outlined">
                    Email me summary
                </button>
                {reservations.map((r, index) => {

                    return <Reservation key={uuidv4()} data={r} />

                })}
            </div>

    )
}