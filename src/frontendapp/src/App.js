import React from 'react'
import CreateFlight from './Component/CreateFlight'
import Search from './Component/Search'
//import UpdateFlights from './Component/UpdateFlights'
import ViewFlights from './Component/ViewFlights'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from './Component/Nav';
import ViewDetails from './Component/ViewDetails'
import GetBookedFlights from './Component/GetBookedFlights'
import BookFlight from './Component/BookFlight'
import ViewReturnFlightDetails from './Component/ViewReturnFlightDetails'
import MyFlights from './Component/MyFlights'
import ViewMyFlightDetails from './Component/viewMyFlightDetails'
import UpdateUser from './Component/UpdateUser'
import Login from './Component/Login'

export default function App() {
  return (
    
<Router>
   
   <div className="App">
     <Nav />
     <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/CreateFlight" component={CreateFlight} exact/>
     <Route path="/ViewFlights" component={ViewFlights} exact/>
     <Route path="/Search" component={Search} exact/>
     <Route path="/MyFlights" component={GetBookedFlights} exact/>
     <Route path="/MyFlights/ViewMyFlightDetails" component={ViewMyFlightDetails} exact/>
     <Route path="/ViewDetails" component={ViewDetails} exact/>
     <Route path="/ViewDetails/BookFlight" component={BookFlight} exact/>
     <Route path="/ViewDetails/BookFlight/ViewReturnFlightDetails" component={ViewReturnFlightDetails} exact/>
     <Route path="/Login" component={Login} exact/>
     </Switch>

     </div>

</Router>
    // <>
    //   <CreateFlight/> 
    //   <ViewFlights/>
    //    {/* <Search/> */}
    //    {/* <UpdateFlights/> */}
    // </>
    
  )
}


const Home= () =>(
  <div>
    <h1>Welcome To ACLords Official Website</h1>
  </div>
)


