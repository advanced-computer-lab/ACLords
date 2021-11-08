import React from 'react'
import CreateFlight from './Component/CreateFlight'
import Search from './Component/Search'
import UpdateFlights from './Component/UpdateFlights'
import ViewFlights from './Component/ViewFlights'
import { BrowserRouter, Route, Switch} from "react-router-dom"

export default function App() {
  return (
<BrowserRouter>
   <Switch>
     <Route path="/CreateFlight" component={CreateFlight} exact/>
     <Route path="/ViewFlights" component={ViewFlights} exact/>
     <Route path="/Search" component={Search} exact/>

   </Switch>
</BrowserRouter>

    // <>
    //   <CreateFlight/> 
    //   <ViewFlights/>
    //    {/* <Search/> */}
    //    {/* <UpdateFlights/> */}
    // </>
    
  )
}


