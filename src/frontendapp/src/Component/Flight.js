import React from 'react'
import UpdateFlights from './UpdateFlights'
//import {useRef} from 'react'
import {Grid} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import {colors} from "@material-ui/core"
import  {Container}  from '@material-ui/core'

export default function Flight({data}) {

    return (
        <div>
            <Grid container justify="center" >
                <Grid item>
                    <item><Paper style= {{width: 500, height: 150, backgroundColor:'violet' , justifyContent:'center'}}>
                        <h3 key ={data._id} >{"From :  " + data.From}  </h3> 
                        <h3 key ={data._id} >{"To :  " + data.To}  </h3> 
                    </Paper>
                    </item>
                </Grid>

                

                
            </Grid>

            <br/>
            <br/>
            
        </div>
    )

            
            
            {/* <label>{"Flight Date :  " + data.FlightDate +", "}  </label>
            <label>{"Cabin :  " + data.Cabin +", "}  </label>
            <label>{"Seats available on flight :  " + data.SeatsAvailableOnFlight +", "}  </label>
            <label>{"Flight Number :  " + data.FlightNumber +", "}  </label>
            <label>{"Departure Date :  " + data.DepartureDate +", "}  </label>
            <label>{"Arrival Date :  " + data.ArrivalDate +", "}  </label> 
            <label>{"Economy Seats :  " + data.EconomySeats +", "}  </label>
            <label>{"Business Class Seats :  " + data.BusinessClassSeats +", "}  </label> 
            <label>{"Airport :  " + data.airport}  </label>
            <label>{"Passengers :  " + data.passengers}  </label>
            <label>{"Duration :  " + data.duration}  </label>
            <label>{"Baggage Allowance :  " + data.baggageAllowance}  </label>
            <label>{"Price :  " + data.price}  </label>  */}




            {/* <button onClick={() => {UpdateFlights(data._id)}}> Edit </button> */}
            {/* <button onClick={() => deleteMethod(data._id)}> Delete </button>  */}


            {/* <UpdateFlights row={data}> Edit  </UpdateFlights>   !!!!!!!!!!!!!!!!!!!! DONT DELETE THIS!!!!!!!!!!   */}
            
        
}
