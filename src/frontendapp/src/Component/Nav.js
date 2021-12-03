import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle ={
       
        color:'Black'
    };


    return(
        <nav>
          <h3>
              ACLords
          </h3>
          <ul className="nav-links">
              <Link style={navStyle} to='/ViewFlights'>
              <li>View Flights</li>
              </Link>
              <Link style={navStyle} to='/CreateFlight'>
              <li>Create Flight</li>
              </Link>
              <Link style={navStyle} to='/Search'>
              <li>Search Flights</li>
              </Link>
              <Link style={navStyle} to='/MyFlights'>
              <li>My Flights</li>
              </Link>
              <Link style={navStyle} to='/Login'>
              <li>My Profile</li>
              </Link>

          </ul>
        </nav>
    )
}


export default Nav;