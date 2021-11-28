import React from 'react'
import CreateFlight from './Component/CreateFlight'
import Search from './Component/Search'
//import UpdateFlights from './Component/UpdateFlights'
import ViewFlights from './Component/ViewFlights'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from './Component/Nav';
import ViewDetails from './Component/ViewDetails'
import BookFlight from './Component/BookFlight'

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
     <Route path="/ViewDetails" component={ViewDetails} exact/>
     <Route path="/ViewDetails/BookFlight" component={BookFlight} exact/>
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


