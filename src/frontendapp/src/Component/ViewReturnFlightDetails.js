import React from 'react'
import axios from 'axios'
//import UpdateFlights from './UpdateFlights'
import { useState, useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
//import ViewFlights from './ViewFlights';
//import BookFlight from './BookFlight';
import { useHistory } from 'react-router-dom';
import './App.css';

export default function ViewReturnFlightDetails(data, returnFlag) {
    console.log(data);
    console.log(returnFlag);
    console.log("bos foo2");
    const [flights, setFlights] = useState([]);
    const history = useHistory();
    //const id = data._id;
    //  console.log("hena before");
    //  console.log(data);

    useEffect(() => {
        axios.get(`http://localhost:8000/ViewDetails/BookFlight/ViewReturnFlightDetails/${data.location.state._id}`).then(res => {
            // console.log(res.data)
            setFlights(res.data);
        })
    }
        , []);


    function handleClick() {
        if (window.confirm("Are you sure you want to book this return flight?")) {
            history.push({
                pathname:"/MyFlights", state: data.location.state
            });
        }
    }

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


                <button className="BookFlight" type="button" onClick={handleClick} variant="outlined">Book Flight</button>
            </Typography>
        </div>
    )


}




// {/* <div>
// <h5>From :  {flights.From} </h5>
// <h5>To:  {flights.To} </h5> 
// <h5>Departure Date :  {flights.DepartureDate} </h5>
// <h5>Arrival Date:  {flights.ArrivalDate} </h5> 
// <h5>Cabin :  {flights.Cabin} </h5>
// {/* <h5>Economy Seats:  {flights.EconomySeats} </h5> 
// <h5>Business Class Seats :  {flights.BusinessClassSeats} </h5> */}
// <h5>Airport:  {flights.Airport} </h5> 
// <h5>Passengers :  {flights.Passengers} </h5>
// <h5>Seats Available On Flight:  {flights.SeatsAvailableOnFlight} </h5> 
// <h5>Duration :  {flights.Duration} </h5>
// <h5>Baggage Allowance:  {flights.BaggageAllowance} </h5> 
// <h5>Price :  {flights.Price} </h5>


// </div>  */}