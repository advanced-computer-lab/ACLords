import axios from 'axios';
export default function CompleteReturnBooking(data) {
    var body = {
        userId: '61a6391f7053ae7baba4fb03',
        flightId: data.location.state._id
    };  
        axios.post("http://localhost:8000/CompleteReturnBooking/", body).then(res => {
            console.log(res);
        }).catch()
}