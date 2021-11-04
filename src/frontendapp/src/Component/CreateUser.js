
import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class CreateUser extends Component {


    constructor() {
        super();
        this.state = {
          Name: '',
          Email:'',
          Password:'',
          Age:'',
          MartialStatus:'',
          BornIn:'',
          LivesIn:'',
          PhoneNumber:'',
          Job:'',
        };
      }


      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      onSubmit = e => {
        e.preventDefault();
    
        const data = {
          Name: this.state.Name,
          Email: this.state.Email,
          Age: this.state.Age,
          MartialStatus: this.state.MartialStatus,
          BornIn: this.state.BornIn,
          LivesIn: this.state.LivesIn,
          PhoneNumber: this.state.PhoneNumber,
          Job: this.state.Job,
        };

        axios
      .post('http://localhost:8000/add-user', data)
      .then(res => {
        this.setState({
            Name: '',
            Email:'',
            Password:'',
            Age:'',
            DateOfBirth:'',
            Nationality:'',
            MobileNumber:'',
            Job:'',
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
              <h1 className="display-4 text-center">Create User</h1>
              <p className="lead text-center">
                  Please fill the following requirments
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='Name'
                    className='form-control'
                    value={this.state.Name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='E-mail'
                    name='Email'
                    className='form-control'
                    value={this.state.Email}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Password'
                    name='Password'
                    className='form-control'
                    value={this.state.Password}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Age'
                    name='Age'
                    className='form-control'
                    value={this.state.Age}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='DateOfBirth'
                    name='DateOfBirth'
                    className='form-control'
                    value={this.state.DateOfBirth}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Nationality'
                    name='Nationality'
                    className='form-control'
                    value={this.state.Nationality}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='MobileNumber'
                    name='Mobile Number'
                    className='form-control'
                    value={this.state.MobileNumber}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Current Job'
                    name='Job'
                    className='form-control'
                    value={this.state.Job}
                    onChange={this.onChange}
                  />
                </div>

                

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
              <a href = "http://localhost:000/">
                Back to home
              </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;



