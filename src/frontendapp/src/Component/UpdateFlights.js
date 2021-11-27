import React from 'react';
import axios from 'axios'
//import {useState,useEffect} from 'react'
import { useRef } from 'react'
import { useState } from 'react'



export default function UpdateFlights({ row }) {
  //const [from,setFrom] = UseState([]);
  const id = row._id;
  const from = useRef(row.From);
  const to = useRef(row.To);
  const flightNumber = useRef(row.FlightNumber);
  const departureDate = useRef(row.DepartureDate);
  const arrivalDate = useRef(row.ArrivalDate);
  // const numberOfEconomySeats = useRef(row.EconomySeats);
  // const numberOfBusinessSeats = useRef(row.BusinessClassSeats);
  const airport = useRef(row.Airport);
  const cabin = useRef(row.cabin);
  const seatsavailableonflight = useRef(row.SeatsAvailableOnFlight);
  const passengers = useRef(row.Passengers);
  const duration = useRef(row.Duration);
  const baggageAllowance = useRef(row.BaggageAllowance);
  const price = useRef(row.Price);


  const [fromState, setfromState] = useState(row.From);
  const [toState, settoState] = useState(row.To);
  const [flightNumberState, setflightNumberState] = useState(row.FlightNumber);
  const [departureDateState, setdepartureDateState] = useState(row.DepartureDate);
  const [arrivalDateState, setarrivalDateState] = useState(row.ArrivalDate);
  //  const [numberOfEconomySeatsState, setnumberOfEconomySeatsState] = useState(row.EconomySeats);
  //  const [numberOfBusinessSeatsState, setnumberOfBusinessSeatsState] = useState(row.BusinessClassSeats);
  const [airportState, setairportState] = useState(row.Airport);
  const [cabinState, setcabinState] = useState(row.Cabin);
  const [seatsavailableonflightState, setseatsavailableonflightState] = useState(row.SeatsAvailableOnFlight);
  const [passengersState, setPassengersState] = useState(row.Passengers);
  const [durationState, setDurationState] = useState(row.Duration);
  const [baggageAllowanceState, setBaggageAllowanceState] = useState(row.BaggageAllowance);
  const [priceState, setPriceState] = useState(row.Price);


  function updateClick() {
    var newFlight = {
      From: from.current.value,
      To: to.current.value,
      FlightNumber: flightNumber.current.value,
      DepartureDate: departureDate.current.value,
      ArrivalDate: arrivalDate.current.value,
      // EconomySeats:numberOfEconomySeats.current.value,
      // BusinessClassSeats:numberOfBusinessSeats.current.value,
      Airport: airport.current.value,
      Cabin: cabin.current.value,
      SeatsAvailableOnFlight: seatsavailableonflight.current.value,
      Passengers: passengers.current.value,
      Duration: duration.current.value,
      BaggageAllowance: baggageAllowance.current.value,
      Price: price.current.value

    };

    axios
      .put("http://localhost:8000/UpdateFlights/" + row._id, newFlight)
      .then((res) => {
        console.log("success");
        window.location.reload(false);

      })
      .catch((err) => {
        console.log("Error!");
      });

  }

  function flightClick() {
   // axios.pu
  }

  function deleteClick() {
    var newFlight = {
      From: from.current.value,
      To: to.current.value,
      FlightNumber: flightNumber.current.value,
      DepartureDate: departureDate.current.value,
      ArrivalDate: arrivalDate.current.value,
      // EconomySeats:numberOfEconomySeats.current.value,
      // BusinessClassSeats:numberOfBusinessSeats.current.value,
      Airport: airport.current.value,
      Cabin: cabin.current.value,
      SeatsAvailableOnFlight: seatsavailableonflight.current.value,
      Passengers: passengers.current.value,
      Duration: duration.current.value,
      BaggageAllowance: baggageAllowance.current.value,
      Price: price.current.value
    };
    const strFlight = JSON.stringify(newFlight);

    if (window.confirm("Are you sure you want to delete this flight?" + strFlight)) {
      axios
        .put("http://localhost:8000/DeleteFlight/" + row._id, newFlight)
        .then((res) => {
          //console.log(newFlight);
          console.log("success");
          window.location.reload(false);

        })
        .catch((err) => {
          console.log("Error!");
        });
    }
    else {
      window.location.reload(false);

    }


  }

  return (
    <div className='form-group'>

      <input type='text' placeholder="Departure Terminal" ref={from} value={fromState} onChange={e => setfromState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Arrival Terminal" ref={to} value={toState} onChange={e => settoState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Flight Number" ref={flightNumber} value={flightNumberState} onChange={e => setflightNumberState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Departure Date" ref={departureDate} value={departureDateState} onChange={e => setdepartureDateState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Arrival Date" ref={arrivalDate} value={arrivalDateState} onChange={e => setarrivalDateState(e.target.value)} /> <br></br>

      {/* <input type = 'text' placeholder="Economy Seats Class" ref = {numberOfEconomySeats} value={numberOfEconomySeatsState} onChange={e => setnumberOfEconomySeatsState(e.target.value)}/> <br></br>

            <input type = 'text' placeholder="Business Seats Class" ref = {numberOfBusinessSeats} value={numberOfBusinessSeatsState} onChange={e => setnumberOfBusinessSeatsState(e.target.value)}/> <br></br> */}

      <input type='text' placeholder="Airport" ref={airport} value={airportState} onChange={e => setairportState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Cabin" ref={cabin} value={cabinState} onChange={e => setcabinState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Number of Seats Available" ref={seatsavailableonflight} value={seatsavailableonflightState} onChange={e => setseatsavailableonflightState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Passengers" ref={passengers} value={passengersState} onChange={e => setPassengersState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Trip Duration" ref={duration} value={durationState} onChange={e => setDurationState(e.target.value)} /> <br></br>

      <input type='text' placeholder="Baggage Allowance" ref={baggageAllowance} value={baggageAllowanceState} onChange={e => setBaggageAllowanceState(e.target.value)} /> <br></br>
      
      <input type='text' placeholder="Price" ref={price} value={priceState} onChange={e => setPriceState(e.target.value)} /> <br></br>

      {/* <input type = 'text' placeholder="Cabin" ref = {cabin} value={cabinState} onChange={e => setcabinState(e.target.value)}/> <br></br> */}

      {/* <input type = 'text' placeholder="Seats Avialable On Flight" ref = {seatsAvailableOnFlight} value={seatsAvailableOnFlightState} onChange={e => setseatsAvailableOnFlightState(e.target.value)}/> <br></br> */}

      <button onClick={updateClick}>Update Flight</button>

      <button onClick={deleteClick}>Delete Flight</button>
      <button onClick={flightClick}>Go to Flight</button>
    </div>




  )

};