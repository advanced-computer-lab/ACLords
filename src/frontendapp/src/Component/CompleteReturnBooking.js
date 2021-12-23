import axios from 'axios';
import jwt from 'jwt-decode'

export default function CompleteReturnBooking(data) {
    const accessToken =localStorage.getItem("accessToken")

    var UserId = jwt(accessToken)._id
    var body = {
        userId: UserId,
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
        axios.post("http://localhost:8000/CompleteReturnBooking/", body).then(res => {
            console.log(res);
        }).catch()
}