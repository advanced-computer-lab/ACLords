import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRef } from 'react'
import Flight from './Flight';


export default function Search() {

    const [search, setSearch] = useState([]);
    const [clicked, setClicked] = useState(false);



    const from = useRef("");
    const to = useRef("");
    const flightNumber = useRef("");
    // const flightDate = useRef("");
    const departureDate = useRef("");
    const arrivalDate = useRef("");
    //const date = useRef("");
    // const numberOfEconomySeats = useRef("");
    // const numberOfBusinessSeats = useRef("");
    const airport = useRef("");
    const cabin = useRef("");
    const seatsavailableonflight = useRef("");
    const passengers = useRef("");
    const duration = useRef("");
    const baggageAllowance = useRef("");
    const price = useRef("");


    function SearchMethod() {
        setClicked(true);
    }
    useEffect(() => {
        // var body = {
        //     From:from.current.value,
        //     To:to.current.value,
        //     FlightNumber:flightNumber.current.value,
        //     DepartureDate:departureDate.current.value,
        //     ArrivalDate:arrivalDate.current.value,
        //     EconomySeats:numberOfEconomySeats.current.value,
        //     BusinessClassSeats:numberOfBusinessSeats.current.value,
        //     Airport:airport.current.value
        // };

        var body = {};

        if (from.current.value !== '') {
            body['From'] = from.current.value;
        }


        if (to.current.value !== '') {
            body['To'] = to.current.value;
        }
        if (flightNumber.current.value !== '') {
            body['Flight Number'] = flightNumber.current.value;
        }
        if (departureDate.current.value !== '') {
            body['DepartureDate'] = departureDate.current.value;
        }
        if (arrivalDate.current.value !== '') {
            body['ArrivalDate'] = arrivalDate.current.value;
        }
        // if(numberOfEconomySeats.current.value !== ''){
        //     body['Economy Seats'] = numberOfEconomySeats.current.value;
        // } 
        // if(numberOfBusinessSeats.current.value !== ''){
        //     body['Business Class Seats'] = numberOfBusinessSeats.current.value;
        // }
        if (airport.current.value !== '') {
            body['Airport'] = airport.current.value;
        }
        if (cabin.current.value !== '') {
            body['Cabin'] = cabin.current.value;
        }
        if (passengers.current.value !== '') {
            body['Passengers'] = passengers.current.value;
        }
        if (seatsavailableonflight.current.value !== '') {
            body['SeatsAvailableOnFlight'] = seatsavailableonflight.current.value;
        }
        if (duration.current.value !== '') {
            body['Duration'] = duration.current.value;
        } if (baggageAllowance.current.value !== '') {
            body['BaggageAllowance'] = baggageAllowance.current.value;
        } if (price.current.value !== '') {
            body['Price'] = price.current.value;
        }

        if (clicked) {
            console.log(body);
            axios.post("http://localhost:8000/Search", body).then(res => {
                console.log(res);
                setSearch(res.data);
            }).catch(err => console.log(err))
        }

    }, [clicked]);

    // di hetet al btala3 al search bas mhtag tzabatha
    //   axios.post("http://localhost:8000/Search",body).then(res=>{
    //      console.log(res);


    return (
        <div className='form-group'>

            <input type='text'
                placeholder='Departure Terminal' ref={from} /> <br></br>

            <input type='text'
                placeholder='Arrival Terminal' ref={to} /> <br></br>
            <input type='text'
                placeholder='Passengers' ref={passengers} /> <br></br>

            <input type='text'
                placeholder='Flight Number' ref={flightNumber} /> <br></br>

            <input type='text'
                placeholder='Departure Date' ref={departureDate} /> <br></br>

            <input type='text'
                placeholder='Arrival Date' ref={arrivalDate} /> <br></br>

            <input type='text'
                placeholder='Seats Available on Flight' ref={seatsavailableonflight} /> <br></br>

            {/* <input type='text' 
            placeholder='Economy Class Seats' ref={numberOfEconomySeats}/> <br></br>

            <input type='text' 
            placeholder='Business Class Seats ' ref={numberOfBusinessSeats} /> <br></br> */}

            <input type='text'
                placeholder='Airport' ref={airport} /> <br></br>

            <input type='text'
                placeholder='Trip Duration' ref={duration} /> <br></br>

            <input type='text'
                placeholder='Baggage Allowance' ref={baggageAllowance} /> <br></br>

            <input type='text'
                placeholder='Price' ref={price} /> <br></br>

            <input type='text' 
            placeholder='Cabin' ref={cabin}/> <br></br>

            {/* <input type='text' 
            placeholder='Seats Available on flight' ref={seatsAvailableOnFlight}/> <br></br> */}

            <br></br>

            <button onClick={SearchMethod}>Search</button>

            <br></br>
            {search.map(s => { return <Flight data={s} /> })}
        </div>
    )

}