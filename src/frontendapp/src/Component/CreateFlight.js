import React from 'react'
import axios from 'axios';
import {useRef} from 'react'
export default function CreateFlight() {


    const flightnumber = useRef("");
    const departuretime = useRef("");
    const arrivaltime = useRef("");
    const date = useRef("");
    const numberofeconomyseats = useRef("");
    const numberofbusinessseats = useRef("");
    const airport = useRef("");
    function Submitclick(){
        var body = {
            FlightNumber:flightnumber.current.value,
            DepartureDate:departuretime.current.value,
            ArrivalDate:arrivaltime.current.value,
            EconomySeats:numberofeconomyseats.current.value,
            BusinessClassSeats:numberofbusinessseats.current.value,
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
        placeholder='Flight Number' ref={flightnumber} /> <br></br>

        <input type='text' 
        placeholder='Departure Time' ref={departuretime} /> <br></br>

        <input type='text' 
        placeholder='Arrival Time' ref={arrivaltime}/> <br></br>

        <input type='text' 
        placeholder='Date' ref={date}/> <br></br>

        <input type='text' 
        placeholder='Number Of Economy Seats' ref={numberofeconomyseats} /> <br></br>


        <input type='text' 
        placeholder='Business Seats' ref={numberofbusinessseats}/> <br></br>

        <input type='text' 
        placeholder='Airport' ref={airport}/> <br></br>

        

        <button onClick={Submitclick}>Create</button>


          </div>

    

    )
}
