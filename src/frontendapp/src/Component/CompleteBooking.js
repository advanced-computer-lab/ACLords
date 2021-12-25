import axios from 'axios';
import BookFlight from './BookFlight';
import jwt from 'jwt-decode'

export default function CompleteBooking(data) {
console.log(data)
    const accessToken =localStorage.getItem("accessToken")

    localStorage.setItem("From", data.From)
    localStorage.setItem("To", data.To)
    var UserId = jwt(accessToken)._id
    var body = {
        userId: UserId,
        flightId: data._id,
        From: data.From,
        To: data.To,
        FlightNumber: data.FlightNumber,
        DepartureDate: data.DepartureDate,
        ArrivalDate: data.ArrivalDate,
        Cabin: data.Cabin,
        Airport: data.Airport,
        BaggageAllowance: data.BaggageAllowance
    };
       
        axios.post("http://localhost:8000/CompleteBooking/", body).then(res => {
            console.log(res);
        }).catch()
    
        BookFlight(data);
}
