import React from 'react'

export default function Flight({data}) {
    return (
        <div>
            <label>{"from :  " + data.From}  </label> 
            <label>{"To :  " + data.To}  </label>
            <label>{"Flight date :  " + data.FlightDate}  </label>
            <label>{"Cabin :  " + data.Cabin}  </label>
            <label>{"Seats avilable on flight :  " + data.SeatsAvilableOnFlight}  </label>
            
           
            

            

            <br/>
            <br/>
        </div>
    )
}

/*
 <label>{"Flight number :  " + data.FlightNumber}  </label>
            <label>{"Departure date :  " + data.DepartureDate}  </label>
            <label>{"Arrival date :  " + data.ArrivalDate}  </label>
            <label>{"Economy seats :  " + data.EconomySeats}  </label>
            <label>{"Business seats :  " + data.BusinessClassSeats}  </label>
            <label>{"Airport :  " + data.Airport}  </label>
*/
