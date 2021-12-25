import React from 'react'
import SearchBooking from './SearchBooking';

export default function BookFlight(data) {                              
        var bodysearch = {
            From:localStorage.getItem("To"),
            To:localStorage.getItem("From")
        };
        console.log(bodysearch)
    return (
        <div>
            <SearchBooking body={bodysearch}/>
        </div>
    )
}

