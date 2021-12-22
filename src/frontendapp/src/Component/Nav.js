import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle ={
       
        color:'Black'
    };


    return(
        <nav>
            
            <a href='/' className='nav-button'>
                <h3>ACLords</h3>
            </a>
          {/* <h3>
              ACLords
          </h3> */}
          <ul className="nav-links">
              <Link style={navStyle} to='/ViewFlights' className='nav-button'>
              <li>View Flights</li>
              </Link>
              <Link style={navStyle} to='/CreateFlight' className='nav-button'>
              <li>Create Flight</li>
              </Link>
              <Link style={navStyle} to='/Search' className='nav-button'>
              <li>Search Flights</li>
              </Link>
              <Link style={navStyle} to='/MyFlights' className='nav-button'>
              <li>My Flights</li>
              </Link>
              <Link style={navStyle} to='/UpdateUser' className='nav-button'>
              <li>My Profile</li>
              </Link>

          </ul>
        </nav>
    )
}


export default Nav;