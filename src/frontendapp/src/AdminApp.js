import React from 'react'
import CreateFlight from './Component/CreateFlight'
import Search from './Component/Search'
//import UpdateFlights from './Component/UpdateFlights'
import ViewFlights from './Component/ViewFlights'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AdminNav from './Component/AdminNav';
import ViewDetails from './Component/ViewDetails'
import GetBookedFlights from './Component/GetBookedFlights'
import ViewReturnFlightDetails from './Component/ViewReturnFlightDetails'
import MyFlights from './Component/MyFlights'
import ViewMyFlightDetails from './Component/viewMyFlightDetails'
import UpdateUser from './Component/UpdateUser'
import Login from './Component/Login'
import background from "./Component/plane.jpg";
import CreateUser from './Component/CreateUser';
import SignUp from './Component/SignUp'
import Registration from './Component/Registration'
import { Link } from 'react-router-dom'
import UpdateUserHelper from './Component/UpdateUserHelper'
import UpdateFlights from './Component/UpdateFlights'
import ViewFlightsAdmin from './Component/ViewFlightsAdmin'
import SearchAdmin from './Component/SearchAdmin'
import Logout from './Component/Logout'


//.env
// ACCESS_TOKEN_SECRET= 11047641652c2801a2f9ce484fee6b6512abf5f972a9767661d6b5ffb9ebc2b5793de1acec650a9b0075c5a62489e35621952a3e5c87db3c124c0f84e1e10070,
// REFRESH_TOKEN_SECRET= 5cf8f23b0b5797f6e8fa27903d288d90b4306a3281b2838aac00d3bea5651c89c9ace3c2e0ab0378e4d42c9f28db283fdc1d32304d9091bfee8096f5e88426bd

// SKIP_PREFLIGHT_CHECK=true

// SERVER_URL=http://localhost:4000
// STRIPE_PRIVATE_KEY=sk_test_51K9d05FrFi3SlqpWJFffcyHQi6nIox2ZwXl0Uzoi1VRu2JKjTjPECC7Or2IWomrsZi4vlr5KBSWjJuNm6Y68vzZZ00GEyQLo75

export default function AdminApp() {
  return (
//hi
    <Router>

      <div className="App" style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        overflowY: 'hidden'
      }}>
        <AdminNav />
        <Switch>
          <Route path="/" component={ViewFlightsAdmin} exact />
          {/* <Route path="/SignUp" component={Registration} exact /> */}
          <Route path="/CreateFlight" component={CreateFlight} exact />
          <Route path="/ViewFlights" component={ViewFlightsAdmin} exact />
          <Route path="/Search" component={SearchAdmin} exact />
          {/* <Route path="/MyFlights" component={GetBookedFlights} exact />
          <Route path="/MyFlights/ViewMyFlightDetails" component={ViewMyFlightDetails} exact />
          <Route path="/ViewDetails" component={ViewDetails} exact />
          <Route path="/ViewDetails/BookFlight" component={BookFlight} exact />
          <Route path="/ViewDetails/BookFlight/ViewReturnFlightDetails" component={ViewReturnFlightDetails} exact />
          <Route path="/UpdateUser" component={UpdateUserHelper} exact />
          <Route path="/Login" component={Login} exact /> */}
          <Route path="/logout" component={Logout} exact />

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
    <h1 >Welcome To Admin Official Website</h1>
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


