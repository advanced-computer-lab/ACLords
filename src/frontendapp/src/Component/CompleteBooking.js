import axios from 'axios';
import BookFlight from './BookFlight';

export default function CompleteBooking(data) {

    console.log(data)
    console.log("comp data")
    var body = {
        userId: '61a6391f7053ae7baba4fb03',
        flightId: data._id,
        From: data.From,
        To: data.To,
        FlightNumber: data.FlightNumber,
        DepartureDate: data.DepartureDate,
        ArrivalDate: data.ArrivalDate,
        Cabin: data.Cabin,
        Airport: data.Airport,
        BaggageAllowance: data.BaggageAllowance,
        Price:data.Price
    };
       
        axios.post("http://localhost:8000/CompleteBooking/", body).then(res => {
            console.log(res);
        }).catch()
    
        BookFlight(data);
}
