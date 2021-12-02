import React from 'react'
//import UpdateFlights from './UpdateFlights'
//import {useRef} from 'react'
import {Grid} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
//import {colors} from "@material-ui/core"
//import  {Container}  from '@material-ui/core'
import './App.css';
import {v4 as uuidv4} from 'uuid';                                              
import {Link} from 'react-router-dom';


export default function Flight({data}) {

    return (
        <div>
            {data.flightId}
        </div>
    )
        
}
