import React from 'react'
import SearchBooking from './SearchBooking';

export default function BookFlight(data) {                              
    console.log(data)
        var bodysearch = {
            From:data.To,
            To:data.From
        };

    return (
        <div>
            <SearchBooking body={bodysearch}/>
        </div>
    )
}

