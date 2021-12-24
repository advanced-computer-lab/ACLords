import React from 'react'
import axios from 'axios'
import { Grid } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import CancelBooking from './CancelBooking';
import emailjs from 'emailjs-com'
import {init} from 'emailjs-com'
import flight from './Flight'

init("user_cS7Y0uXoWVDpEmlzxTkDa");

const serviceID = 'service_n0p9w7r';
const templateID = 'template_77wo2yk    ';
const userID = 'user_cS7Y0uXoWVDpEmlzxTkDa';


export default function MyFlight({ data }) {
    console.log(data)
    console.log("ggggggg")
    const history = useHistory();


    function handleClick() {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            // data.location.state.SeatsAvailableOnFlight=parseInt(data.location.state.SeatsAvailableOnFlight)+1;
            // data.location.state.Passengers=parseInt(data.location.state.Passengers)-1;
            // data.location.state.SeatsAvailableOnFlight=data.location.state.SeatsAvailableOnFlight.toString();
            // data.location.state.Passengers=data.location.state.Passengers.toString();
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


            // axios.put("http://localhost:8000/UpdateFlights/" + data.location.state._id, data.location.state)
            // .then((res) => {
            // console.log("success");})
            // .catch((err) => {
            // console.log("Error!");
            // });
            
            emailjs.send(serviceID,templateID,{to_name:"Danial",id:data.location.state._id,send_to:"danial.amir97@gmail.com"},userID)
            CancelBooking(data._id);
            history.push("/MyFlights")
        }
    }


    return (
        <div>
            <Grid container justify="center" >
                <Grid item>
                    <item><Paper style={{ width: 500, height: 150, backgroundColor: 'blanchedalmond', justifyContent: 'center' }}>
                        <h3 key={uuidv4()} >{"Departure Terminal :  " + data.From}  </h3>
                        <h3 key={uuidv4()} >{"Arrival Terminal :  " + data.To}  </h3>
                        {/* <Link component={Link} to="/url" style= {{justifyContent:'end'}}>  */}
                        <Link to={{ pathname: '/MyFlights/ViewMyFlightDetails', state: data }} style={{ justifyContent: 'end' }}>
                            More Details...
                        </Link>
                        <Button type="button" onClick={handleClick} variant="outlined">
                            Cancel Booking
                        </Button>

                    </Paper>
                    </item>
                </Grid>
            </Grid>

            <br />
            <br />

        </div>
    )
}
