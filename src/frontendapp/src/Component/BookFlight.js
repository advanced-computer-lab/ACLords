import React from 'react'
import SearchBooking from './SearchBooking';

export default function BookFlight(data) {                              
    console.log(data)
    console.log("book flight data")
        try{
        var bodysearch = {
            From:data.location.state.To,
            To:data.location.state.From
        };
    }
    catch{
        var bodysearch = {
            From: data.To,
            To: data.From
        }
    }

    return (
        <div>
            <SearchBooking body={bodysearch}/>
        </div>
    )
}

