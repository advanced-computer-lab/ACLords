import React from 'react'
import UpdateFlights from './UpdateFlights'
import {useRef} from 'react'

export default function Flight({data}) {

//     function UpdateFlights(){
//     //const [from,setFrom] = UseState([]);

//     const from = useRef("");
//      const to = useRef("");
//     const flightNumber = useRef("");
//     const departureDate = useRef("");
//     const arrivalDate = useRef("");
//     const numberOfEconomySeats = useRef("");
//     const numberOfBusinessSeats = useRef("");
//     const airport = useRef("");

   

//  }
console.log(data);

    return (
        <div>
            <label>{"From :  " + data.From +", "}  </label> 
            <label>{"To :  " + data.To +", "}  </label>
            <label>{"Flight Date :  " + data.FlightDate +", "}  </label>
            <label>{"Cabin :  " + data.Cabin +", "}  </label>
            <label>{"Seats available on flight :  " + data.SeatsAvailableOnFlight +", "}  </label>
            <label>{"Flight Number :  " + data.FlightNumber +", "}  </label>
            <label>{"Departure Date :  " + data.DepartureDate +", "}  </label>
            <label>{"Arrival Date :  " + data.ArrivalDate +", "}  </label>
            {/* <label>{"Economy Seats :  " + data.EconomySeats +", "}  </label>
            <label>{"Business Class Seats :  " + data.BusinessClassSeats +", "}  </label> */}
            <label>{"Airport :  " + data.airport}  </label>
            <label>{"Cabin :  " + data.cabin}  </label>
            <label>{"Seats Avaialable on Flight :  " + data.seatsAvailableOnFlight}  </label>


            {/*} <button onClick={() => {UpdateFlights(data._id)}}> Edit </button> */}
            {/* <button onClick={() => deleteMethod(data._id)}> Delete </button>  */}

            

        
            {/* <a href = "http://localhost:3000/UpdateFlights"  > Edit </a> */}

            <UpdateFlights row={data}> Edit  </UpdateFlights>      
            
            {/* From:from.current.value,
            To:to.current.value,
            FlightNumber:flightNumber.current.value,
            DepartureTime:departureTime.current.value,
            ArrivalTime:arrivalTime.current.value,
            EconomySeats:numberOfEconomySeats.current.value,
            BusinessClassSeats:numberOfBusinessSeats.current.value,
            Airport:airport.current.value */}
            <br/>
            <br/>
        </div>
    )
}


//  <label>{"Flight number :  " + data.FlightNumber}  </label>
//             <label>{"Departure date :  " + data.DepartureDate}  </label>
//             <label>{"Arrival date :  " + data.ArrivalDate}  </label>
//             <label>{"Economy seats :  " + data.EconomySeats}  </label>
//             <label>{"Business seats :  " + data.BusinessClassSeats}  </label>
//             <label>{"Airport :  " + data.Airport}  </label>

