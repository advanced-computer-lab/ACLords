import axios from 'axios';
import BookFlight from './BookFlight';

export default function CompleteBooking(data) {

    console.log(data)
    var body = {
        userId: '61a6391f7053ae7baba4fb03',
        flightId: data.location.state._id,
        From: data.location.state.From,
        To: data.location.state.To,
        FlightNumber: data.location.state.FlightNumber,
        DepartureDate: data.location.state.DepartureDate,
        ArrivalDate: data.location.state.ArrivalDate,
        Cabin: data.location.state.Cabin,
        Airport: data.location.state.Airport,
        BaggageAllowance: data.location.state.BaggageAllowance
    };
       
        axios.post("http://localhost:8000/CompleteBooking/", body).then(res => {
            console.log(res);
        }).catch()
    
        BookFlight(data);
}
