import React from 'react'
import axios from 'axios'
//import UpdateFlights from './UpdateFlights'
import { useState, useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
//import ViewFlights from './ViewFlights';
//import BookFlight from './BookFlight';
import { useHistory } from 'react-router-dom';
import './App.css';
import CompleteBooking from './CompleteBooking';
import UpdateFlights from './UpdateFlights';
import emailjs from 'emailjs-com'
import {init} from 'emailjs-com'

init("user_cS7Y0uXoWVDpEmlzxTkDa");

const serviceID = 'default_service';
const templateID = 'template_5pw7nun';
const userID = 'user_cS7Y0uXoWVDpEmlzxTkDa';

export default function ViewDetails(data) {
    const [flights, setFlights] = useState([]);
    const history = useHistory();
    //const id = data._id;
    //  console.log("hena before");
    //  console.log(data);

    useEffect(() => {
        axios.get(`http://localhost:8000/ViewDetails/${data.location.state._id}`).then(res => {
            // console.log(res.data)
            setFlights(res.data);
        })
    }
        , []);


    function handleClick() {
        if(data.location.state.SeatsAvailableOnFlight>0){

            if (window.confirm("Are you sure you want to book this flight?")) {
                CompleteBooking(data);
                emailjs.send(serviceID,templateID,{to_name:"Danial",id:data.location.state._id,send_to:"danial.amir97@gmail.com"},userID)
            //data.location.state.SeatsAvailableOnFlight= data.location.state.SeatsAvailableOnFlight-1;


          //     data.location.state.SeatsAvailableOnFlight-=1;
// value={data.location.state.SeatsAvailableOnFlight} onChange={e => setcabinState(e.target.value)
                
                history.push({

                    pathname:"/ViewDetails/BookFlight", state: data.location.state
                });
            }
         }
        else{
            window.prompt("Sorry, this flight is complete")
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