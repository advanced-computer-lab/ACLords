import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function AdminNav(){
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

          {/* EditFlight */}
          {/*delete*/}
          <ul className="nav-links">
              <Link style={navStyle} to='/' className='nav-button'>
              <li>View Flights</li>
              </Link>
              <Link style={navStyle} to='/CreateFlight' className='nav-button'>
              <li>Create Flight</li>
              </Link>
              <Link style={navStyle} to='/Search' className='nav-button'>
              <li>Search Flights</li>
              </Link>
              <Link style={navStyle} to='/logout' className='nav-button'>
              <li>Logout</li>
              </Link>
              
              

          </ul>
        </nav>
    )
}


export default AdminNav;