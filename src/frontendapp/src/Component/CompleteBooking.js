import React from 'react'
import axios from 'axios';
import { useRef } from 'react'

export default function CompleteBooking(flightId) {


        var body = {
            userId: '61a6391f7053ae7baba4fb02',
            flightId: flightId
        }
        axios.post("http://localhost:8000/CompleteBooking/", body).then(res => {
            console.log(res);
        }).catch()
    
}
