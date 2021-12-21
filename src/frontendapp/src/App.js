import React from 'react'
import CreateFlight from './Component/CreateFlight'
import Search from './Component/Search'
//import UpdateFlights from './Component/UpdateFlights'
import ViewFlights from './Component/ViewFlights'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './Component/Nav';
import ViewDetails from './Component/ViewDetails'
import GetBookedFlights from './Component/GetBookedFlights'
import BookFlight from './Component/BookFlight'
import ViewReturnFlightDetails from './Component/ViewReturnFlightDetails'
import MyFlights from './Component/MyFlights'
import ViewMyFlightDetails from './Component/viewMyFlightDetails'
import UpdateUser from './Component/UpdateUser'
import Login from './Component/UpdateUserHelper'
import background from "./Component/plane.jpg";
import CreateUser from './Component/CreateUser';
import SignUp from './Component/SignUp'
import Registeration from './Component/Registration'
import { Link } from 'react-router-dom'
import UpdateUserHelper from './Component/UpdateUserHelper'

export default function App() {
  return (

    <Router>

      <div className="App" style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
       
        
        height: '100%' 
      }}>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/SignUp" component={Registeration} exact />
          <Route path="/CreateFlight" component={CreateFlight} exact />
          <Route path="/ViewFlights" component={ViewFlights} exact />
          <Route path="/Search" component={Search} exact />
          <Route path="/MyFlights" component={GetBookedFlights} exact />
          <Route path="/MyFlights/ViewMyFlightDetails" component={ViewMyFlightDetails} exact />
          <Route path="/ViewDetails" component={ViewDetails} exact />
          <Route path="/ViewDetails/BookFlight" component={BookFlight} exact />
          <Route path="/ViewDetails/BookFlight/ViewReturnFlightDetails" component={ViewReturnFlightDetails} exact />
          <Route path="/UpdateUser" component={UpdateUserHelper} exact />
          <Route path="/Login" component={UpdateUserHelper} exact />
        </Switch>

      </div>

    </Router>

  )
}
// function handleSignUpClick(){
//   history.push({
//     pathname:"/SignUp", state: data.location.state
// });
// }

// function handleLoginClick(){
//   history.push({
//     pathname:"/Login", state: data.location.state
// });
// }

// function handleGuestClick(){
//   history.push({
//     pathname:"/ViewFlights", state: data.location.state
// });
// }

const Home = () => (
  <div>
    <h1 >Welcome To ACLords Official Website</h1>
    <Link to="/ViewFlights">
      <button type="button">
        Continue as a Guest User
      </button>
    </Link>
    <Link to="/SignUp">
      <button type="button">
        Sign Up
      </button>
    </Link>
    <Link to="/Login">
      <button type="button">
        Login
      </button>
    </Link>
  </div>
)


