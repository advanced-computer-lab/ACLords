import React from 'react';
import ViewFlights from './ViewFlights';
import { Router } from 'react';


export default function Home(){

        return (
            <div>
                <button className="BookFlight" type="button" onClick={handleClick} variant="outlined">Book Flight</button>
            </div>
        );
    
};

