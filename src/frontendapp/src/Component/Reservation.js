import React, { useEffect } from 'react'
//import UpdateFlights from './UpdateFlights'
//import {useRef} from 'react'
import { Grid } from "@material-ui/core"
import { Button } from '@material-ui/core';

import Paper from "@material-ui/core/Paper"
//import {colors} from "@material-ui/core"
//import  {Container}  from '@material-ui/core'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CancelBooking from './CancelBooking'
import { useHistory } from 'react-router';


export default function Reservation({ data }) {
console.log(data)
const history = useHistory()

    function handleClick() {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            CancelBooking(data._id);
            window.location.reload()
        }
    }
    return (
        <div>
            <Grid container justify="center" >
                <Grid item>
                    <item><Paper style={{ width: 300, height: 350, backgroundColor: 'blanchedalmond', justifyContent: 'center' }}>
                        <h6 key={uuidv4()} >{"Departure Terminal :  " + data.From}  </h6>
                        <h6 key={uuidv4()} >{"Arrival Terminal :  " + data.To}  </h6>
                        <h6 key={uuidv4()} >{"Flight Number :  " + data.FlightNumber}  </h6>
                        <h6 key={uuidv4()} >{"Departure Date :  " + data.DepartureDate}  </h6>
                        <h6 key={uuidv4()} >{"Arrival Date :  " + data.ArrivalDate}  </h6>
                        <h6 key={uuidv4()} >{"Cabin :  " + data.Cabin}  </h6>
                        <h6 key={uuidv4()} >{"Airport :  " + data.Airport}  </h6>
                        <h6 key={uuidv4()} >{"Baggage Allowance :  " + data.BaggageAllowance}  </h6>
                        {/* <Link component={Link} to="/url" style= {{justifyContent:'end'}}>  */}
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
