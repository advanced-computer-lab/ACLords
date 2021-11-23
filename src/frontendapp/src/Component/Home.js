import React from 'react';
import ViewFlights from './ViewFlights';
import { Router } from 'react';


export default function Home(){

        return (
            <div>
                <button onClick={ViewFlights}>View Flights</button>
            </div>
        );
    
};

