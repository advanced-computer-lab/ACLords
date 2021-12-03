import React from 'react'
import { Grid } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import CancelBooking from './CancelBooking';


export default function MyFlight({ data }) {
    console.log(data)
    console.log("ggggggg")
    const history = useHistory();

    function handleClick() {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
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
