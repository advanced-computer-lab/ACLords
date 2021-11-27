import React from 'react'
import axios from 'axios'
import UpdateFlights from './UpdateFlights'
import {useState,useEffect} from 'react';
import { Typography } from '@material-ui/core';




export default function ViewDetails(data) {

    const [flights,setFlights] = useState([]);    
    
    useEffect(()=>{                     
        axios.get(`http://localhost:8000/ViewDetails/${data.location.state}`).then(res=>{
            console.log(res.data)
        setFlights(res.data);
        })
    },[]);
    

    return (
        <div>
            <h2>Flight Details</h2>
            <Typography
            variant="h6"
            align="left"
            color="primary"
            >
                Departure Terminal :  {flights.From} <br/>
                Arrival Terminal :  {flights.To} <br/>
                Flight Number : {flights.FlightNumber} <br/>
                Departure Date :  {flights.DepartureDate}<br/>
                Arrival Date:  {flights.ArrivalDate}<br/>
                Cabin :  {flights.Cabin}<br/>
             {/* Economy Seats:  {flights.EconomySeats} <br/>
                Business Class Seats :  {flights.BusinessClassSeats} <br/> */}
                Airport:  {flights.Airport} <br/>
                Passengers :  {flights.Passengers}<br/>
                Seats Available On Flight : {flights.SeatsAvailableOnFlight} <br/>
                Trip Duration :  {flights.Duration} <br/>
                Baggage Allowance:  {flights.BaggageAllowance} <br/>
                Price :  {flights.Price} <br/>


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