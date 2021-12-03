import axios from 'axios';
import BookFlight from './BookFlight';
import GetBookedFlights from './GetBookedFlights';
import MyFlights from './MyFlights';

export default function CancelBooking(data) {
console.log(data);
console.log("bos foo2")
    var body = {
        userId: '61a6391f7053ae7baba4fb03',
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
