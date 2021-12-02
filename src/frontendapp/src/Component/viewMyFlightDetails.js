import React from 'react'
import axios from 'axios'
//import UpdateFlights from './UpdateFlights'
import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
//import ViewFlights from './ViewFlights';
//import BookFlight from './BookFlight';
import './App.css';

export default function ViewMyFlightDetails(data) {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/MyFlights/ViewMyFlightDetails/${data.location.state._id}`).then(res => {
            setFlights(res.data);
        })
    } , []);

    return (
        <div>
            <h2>Flight Details</h2>
            <Typography
                variant="h6"
                align="left"
                color="primary"
            >
                Departure Terminal :  {flights.From} <br />
                Arrival Terminal :  {flights.To} <br />
                Flight Number : {flights.FlightNumber} <br />
                Departure Date :  {flights.DepartureDate}<br />
                Arrival Date:  {flights.ArrivalDate}<br />
                Cabin :  {flights.Cabin}<br />
                {/* Economy Seats:  {flights.EconomySeats} <br/>
                Business Class Seats :  {flights.BusinessClassSeats} <br/> */}
                Airport:  {flights.Airport} <br />
                Passengers :  {flights.Passengers}<br />
                Seats Available On Flight : {flights.SeatsAvailableOnFlight} <br />
                Trip Duration :  {flights.Duration} <br />
                Baggage Allowance:  {flights.BaggageAllowance}
                <br />
                Price :  {flights.Price} <br />
                <br />
            </Typography>
        </div>
    )
}