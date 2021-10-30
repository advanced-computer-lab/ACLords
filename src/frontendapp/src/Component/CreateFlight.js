import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateFlight extends Component {


    constructor() {
        super();
        this.state = {
          FlightNumber: '',
          DepartureDate: / / ,
          ArrivalDate: / / ,
          EconomySeats:'',
          BusinessClassSeats:'',
          Airport:'',



        };
      }


      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

      onSubmit = (e) => {
        e.preventDefault();
    
        const data = {
            FlightNumber: this.state.FlightNumber,
            DepartureDate: this.state.DepartureDate,
            ArrivalDate: this.state.ArrivalDate,
            EconomySeats: this.state.EconomySeats,
            BusinessClassSeats: this.state.BusinessClassSeats,
            Airport: this.state.Airport,
          
        };

        axios
      .post('http://localhost:8000/CreateFlight', data)
      .then(res => {
        this.setState({
            FlightNumber: '',
            DepartureDate: / / ,
            ArrivalDate: / / ,
            EconomySeats:'',
            BusinessClassSeats:'',
            Airport:'',
            

            



        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateUser!");
      })
  };





  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Flight</h1>
              <p className="lead text-center">
                  Please fill the following requirments
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='FlightNumber'
                    name='FlightNumber'
                    className='form-control'
                    value={this.state.FlightNumber}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Departure Date'
                    name='DepartureDate'
                    className='form-control'
                    value={this.state.DepartureDate}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Arrival Date'
                    name='ArrivalDate'
                    className='form-control'
                    value={this.state.ArrivalDate}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Number Of Economy Seats'
                    name='EconomySeats'
                    className='form-control'
                    value={this.state.EconomySeats}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Number Of Business Class Seats'
                    name='BusinessClassSeats'
                    className='form-control'
                    value={this.state.BusinessClassSeats}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Airport '
                    name='Airport'
                    className='form-control'
                    value={this.state.Airport}
                    onChange={this.onChange}
                  />
                </div>
                

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
              <a href = "http://localhost:3000/">
                Back to home
              </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFlight;
