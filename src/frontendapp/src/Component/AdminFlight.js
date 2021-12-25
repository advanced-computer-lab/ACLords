import React from 'react'
import UpdateFlights from './UpdateFlights'
//import {useRef} from 'react'
import {Grid} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
//import {colors} from "@material-ui/core"
//import  {Container}  from '@material-ui/core'
import './App.css';
import {v4 as uuidv4} from 'uuid';                                              
import {Link} from 'react-router-dom';


export default function AdminFlight({data}) {

    return (
        <div>
              {/* <button onClick={() => {UpdateFlights(data._id)}}> Edit </button>  */}
             {/* <button onClick={() => deleteMethod(data._id)}> Delete </button>   */}


             <UpdateFlights row={data}> Edit  </UpdateFlights>

            <br/>
            <br/>
            
        </div>
    )

            
            
            /* <label>{"Flight Date :  " + data.FlightDate +", "}  </label>
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
            <label>{"Price :  " + data.price}  </label>  */




            
        
}
