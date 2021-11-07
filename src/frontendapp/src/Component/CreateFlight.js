import React from 'react'
import axios from 'axios';
import {useRef} from 'react'
export default function CreateFlight() {

    const from = useRef("");
    const to = useRef("");
    const flightNumber = useRef("");
    // const flightDate = useRef("");
    const departureDate = useRef("");
    const arrivalDate = useRef("");
    const date = useRef("");
    const numberOfEconomySeats = useRef("");
    const numberOfBusinessSeats = useRef("");
    const airport = useRef("");

    
    function Submitclick(){
        var body = {
            From:from.current.value,
            To:to.current.value,
            FlightNumber:flightNumber.current.value,
            DepartureDate:departureDate.current.value,
            ArrivalDate:arrivalDate.current.value,
            EconomySeats:numberOfEconomySeats.current.value,
            BusinessClassSeats:numberOfBusinessSeats.current.value,
            Airport:airport.current.value
        };
        axios.post("http://localhost:8000/CreateFlight",body).then(res=>{
            console.log(res);
        }).catch()

        // const name = flightnumber.current.value;
        // console.log(name);
        
        // const name1 = departuretime.current.value;
        // console.log(name1);
        // const name2 = arrivaltime.current.value;
        // console.log(name2);
        // const name3 = date.current.value;
        // console.log(name3);
        // const name4 = numberofeconomyseats.current.value;
        // console.log(name4);
        // const name5 = numberofbusinessseats.current.value;
        // console.log(name5);
        // const name6 = airport.current.value;
        // console.log(name6);


        
        

    }

    return (
        
        <div className='form-group'>

        <input type='text' 
        placeholder='From' ref={from} /> <br></br>

        <input type='text' 
        placeholder='To' ref={to} /> <br></br>

        <input type='text' 
        placeholder='Flight Number' ref={flightNumber} /> <br></br>

     {/* <input type='text' 
        placeholder='Flight Date' ref={flightDate} /> <br></br>  */}

        <input type='text' 
        placeholder='Departure Date' ref={departureDate} /> <br></br>

        <input type='text' 
        placeholder='Arrival Date' ref={arrivalDate}/> <br></br>

        <input type='text' 
        placeholder='Date' ref={date}/> <br></br>

        <input type='text' 
        placeholder='Number Of Economy Seats' ref={numberOfEconomySeats} /> <br></br>


        <input type='text' 
        placeholder='Business Seats' ref={numberOfBusinessSeats}/> <br></br>

        <input type='text' 
        placeholder='Airport' ref={airport}/> <br></br>

        

        <button onClick={Submitclick}>Create</button>


          </div>

    

    )
}
