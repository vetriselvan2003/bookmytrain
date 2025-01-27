import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectetrain } from '../Slicers/selectedtrainSlicer';
import { useNavigate } from 'react-router-dom';
import '../pages/tran.css'

function Trains({train}) {
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const data=useSelector((state)=>state.userdetail)
    const from=data.From
    const to=data.To
    const no_of_ticket=data.TicketCount
    const bookingdate=data.BookingDate

    console.log(train)

    let trai=train.filter((item,index)=>item.start.toLowerCase() === from.toLowerCase() && item.end.toLowerCase() === to.toLowerCase() && (!item.date||item.date===bookingdate))
    let trains=[]
    trai.forEach(item=>{
      if(!trains.some(Train=>Train.name===item.name)){
        trains.push(item);
      }
    });

    console.log(trains)

    function bookticket(train){
        dispatch(selectetrain(train))
        navigate('/passengerDetails')
    }

    
  return (
    <div className="container my-5">
    <h1 className="text-center mb-4">Train List</h1>
    <div className="row">
      {trains.map((item, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                <strong>From:</strong> {item.start} <br />
                <strong>To:</strong> {item.end} <br />
                <strong>Time:</strong> {item.time} <br />
                <strong>Available Seats:</strong> {item.available_seat}
              </p>
              <button className="btn btn-primary w-100"   onClick={()=>(no_of_ticket<=item.available_seat)?bookticket(item):alert("Sorry, not enough seats available!")}>Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Trains