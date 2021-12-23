import axios from 'axios';
import BookFlight from './BookFlight';
import GetBookedFlights from './GetBookedFlights';
import MyFlights from './MyFlights';
import jwt from 'jwt-decode'

export default function CancelBooking(data) {
    const accessToken =localStorage.getItem("accessToken")

    var UserId = jwt(accessToken)._id
    var body = {
        userId: UserId,
        flightId: data._id,
        From: data.From,
        To: data.To,
        FlightNumber: data.bodyFlightNumber,
        DepartureDate: data.DepartureDate,
        ArrivalDate: data.ArrivalDate,
        Cabin: data.Cabin,
        Airport: data.Airport,
        BaggageAllowance: data.BaggageAllowance
    
    };
       
        axios.put("http://localhost:8000/MyFlights/CancelBooking/"+ data, body).then(res => {
            console.log(res);
        }).catch()

}
