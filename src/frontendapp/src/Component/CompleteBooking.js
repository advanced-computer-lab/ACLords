import axios from 'axios';
import BookFlight from './BookFlight';

export default function CompleteBooking(data) {

    var body = {
        userId: '61a6391f7053ae7baba4fb03',
        flightId: data.location.state._id
    };
       
        axios.post("http://localhost:8000/CompleteBooking/", body).then(res => {
            console.log(res);
        }).catch()
    
        BookFlight(data);
}