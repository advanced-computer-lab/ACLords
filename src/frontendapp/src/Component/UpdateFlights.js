import React from 'react';
import axios from 'axios'
//import {useState,useEffect} from 'react'
import {useRef} from 'react'
import {useState} from 'react'

 

export default function UpdateFlights({row}){
    //const [from,setFrom] = UseState([]);
    const id = row._id;
    console.log(id);
    const from = useRef(row.From);
    console.log(from);
    console.log(row.From);
    const to = useRef(row.To);
    const flightNumber = useRef(row.FlightNumber);
    const departureDate = useRef(row.DepartureDate);
    const arrivalDate = useRef(row.ArrivalDate);
    const numberOfEconomySeats = useRef(row.EconomySeats);
    const numberOfBusinessSeats = useRef(row.BusinessClassSeats);
    const airport = useRef(row.Airport);
    const [fromState, setfromState] = useState(row.From);
    const [toState, settoState] = useState(row.To);
    const [flightNumberState, setflightNumberState] = useState(row.FlightNumber);
    const [departureDateState, setdepartureDateState] = useState(row.DepartureDate);
    const [arrivalDateState, setarrivalDateState] = useState(row.ArrivalDate);
    const [numberOfEconomySeatsState, setnumberOfEconomySeatsState] = useState(row.EconomySeats);
    const [numberOfBusinessSeatsState, setnumberOfBusinessSeatsState] = useState(row.BusinessClassSeats);
    const [airportState, setairportState] = useState(row.Airport);
    

    function updateClick(){
        var newFlight = {
            From:from.current.value,
            To:to.current.value,
            FlightNumber:flightNumber.current.value,
            DepartureDate:departureDate.current.value,
            ArrivalDate:arrivalDate.current.value,
            EconomySeats:numberOfEconomySeats.current.value,
            BusinessClassSeats:numberOfBusinessSeats.current.value,
            Airport:airport.current.value
        };
        // var body = {
        //     newFlight : newFlight,
        //        id : id
        // };
    //    axios.put(`http://localhost:8000/UpdateFlights/${id}`,newFlight).then(res=>{
    //        console.log(res);
    //        console.log("success")
    //     }).catch()

    axios
    .put("http://localhost:8000/UpdateFlights/" + row._id, newFlight)
       .then((res) => {
         console.log(newFlight);
         console.log("success");
         window.location.reload(false);
     
       })
       .catch((err) => {
         console.log("Error!");
       });

    }

    return(
        <div className='form-group'>

            <input type = 'text' placeholder="From" ref={from}  value={fromState} onChange={e => setfromState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="To" ref = {to} value={toState} onChange={e => settoState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="Flight Number" ref = {flightNumber} value={flightNumberState} onChange={e => setflightNumberState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="Departure Date" ref = {departureDate} value={departureDateState} onChange={e => setdepartureDateState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="Arrival Date" ref = {arrivalDate} value={arrivalDateState} onChange={e => setarrivalDateState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="Economy Seats Class" ref = {numberOfEconomySeats} value={numberOfEconomySeatsState} onChange={e => setnumberOfEconomySeatsState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="Business Seats Class" ref = {numberOfBusinessSeats} value={numberOfBusinessSeatsState} onChange={e => setnumberOfBusinessSeatsState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="Airport" ref = {airport} value={airportState} onChange={e => setairportState(e.target.value)}/> <br></br>


            <button onClick={updateClick}>Update Flight</button>
        </div>




    )

};