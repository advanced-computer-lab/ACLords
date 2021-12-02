import React from 'react'
import SearchBooking from './SearchBooking';

export default function BookFlight(data) {                              
    console.log(data)
        var bodysearch = {
            From:data.location.state.To,
            To:data.location.state.From
        };

    return (
        <div>
            <SearchBooking body={bodysearch}/>
        </div>
    )
}

