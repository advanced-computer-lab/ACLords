import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateFilght from './Component/CreateFlight';
// import viewFlights from './Component/viewFlights';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' Component={CreateFilght} />
          <Route path='/CreateFlight' Component={CreateFilght} />
    
        </div>
      </Router>
    );
  }
}

export default App;