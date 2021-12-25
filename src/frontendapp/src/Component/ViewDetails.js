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
import flight from './Flight'
import jwt from 'jwt-decode'

init("user_cS7Y0uXoWVDpEmlzxTkDa");

const serviceID = 'default_service';
const templateID = 'template_5pw7nun';
const userID = 'user_cS7Y0uXoWVDpEmlzxTkDa';

export default function ViewDetails(data) {
    const accessToken = localStorage.getItem("accessToken")

    var email = jwt(accessToken).Email
    console.log(email)
    console.log(data.location.state._id)
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
        
// D
        //console.log(parseInt(data.location.state.Price))
        
        if(data.location.state.SeatsAvailableOnFlight>0){

            if (window.confirm("Are you sure you want to book this flight?")) {

                // console.log(data.location.state.SeatsAvailableOnFlight)
                // data.location.state.SeatsAvailableOnFlight=parseInt(data.location.state.SeatsAvailableOnFlight)-1;
                // data.location.state.Passengers=parseInt(data.location.state.Passengers)+1;
                // console.log(data.location.state.SeatsAvailableOnFlight)
                // data.location.state.SeatsAvailableOnFlight=data.location.state.SeatsAvailableOnFlight.toString();
                // data.location.state.Passengers=data.location.state.Passengers.toString();
                // //console.log("hah")
                // //console.log(data)

                // var newFlight = {
                //     From: data.location.state.From,
                //     To: data.location.state.To,
                //     FlightNumber: data.location.state.FlightNumber,
                //     DepartureDate: data.location.state.DepartureDate,
                //     ArrivalDate: data.location.state.ArrivalDate,
                //     // EconomySeats:numberOfEconomySeats.current.value,
                //     // BusinessClassSeats:numberOfBusinessSeats.current.value,
                //     Airport: data.location.state.Airport,
                //     Cabin: data.location.state.Cabin,
                //     SeatsAvailableOnFlight: data.location.state.SeatsAvailableOnFlight,
                //     Passengers: data.location.state.Passengers,
                //     Duration: data.location.state.Duration,
                //     BaggageAllowance: data.location.state.BaggageAllowance,
                //     Price: data.location.state.Price
              
                //   };


                // axios.put("http://localhost:8000/UpdateFlights/" + data.location.state._id, newFlight)
                // .then((res) => {
                // console.log("success");})
                // .catch((err) => {
                // console.log("Error!");
                // });

                // console.log("geit?")


                var price1 = parseInt(data.location.state.Price) / 100
                
                fetch("http://localhost:4000/create-checkout-session", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        items: [
                            { id: 1, quantity: price1 },
                        ],
                    }),
                })
                    .then(res => {
                        if (res.ok) return res.json()
                        return res.json().then(json => Promise.reject(json))
                    })
                    .then(({ url }) => {
                        //console.log(url)
                         window.location = url
                    })
                    .catch(e => {
                        console.error(e.error)
                    })
                    
                    CompleteBooking(data.location.state);

                    var UserId = jwt(accessToken)._id
                    var name = jwt(accessToken).FirstName
                   
                    emailjs.send(serviceID,templateID,{to_name: name, id:UserId, send_to:JSON.stringify(email)},userID)    
                // history.push({
                //     pathname:"/ViewDetails/BookFlight", state: data.location.state
                // });
                
                
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