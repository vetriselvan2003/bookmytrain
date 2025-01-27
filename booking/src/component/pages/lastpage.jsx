import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Lastpage() {
  const user = useSelector(state => state.userdetail);
  const train = useSelector(state => state.selectedtrain);
  const passengers = useSelector(state => state.passengersdetail);
  const redirect=useNavigate();

  function HandleButton(){
    redirect('/')
  }

  return (
    <div className="container my-5">
      <div className="card mb-4">
        <div className="card-header">
          <h5>User Details</h5>
        </div>
        <div className="card-body">
          <h6><strong>Name:</strong> {user.Name}</h6>
          <h6><strong>Email:</strong> {user.Email}</h6>
          <h6><strong>Phone:</strong> {user.PhoneNumber}</h6>
          <h6><strong>Number of Tickets:</strong> {user.TicketCount}</h6>
          <h6><strong>Date of Booking:</strong> {user.BookingDate}</h6>
          <h6><strong>From:</strong> {user.From}</h6>
          <h6><strong>To:</strong> {user.To}</h6>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5>Train Details</h5>
        </div>
        <div className="card-body">
          <h6><strong>Train Name:</strong> {train.name}</h6>
          <h6><strong>Train Time:</strong> {train.time}</h6>
        </div>
      </div>

      <div>
        <h5>Passenger Details</h5>
        {passengers.map((item, index)=>(
          <div className="card mb-2" key={index}>
            <div className="card-header">
              <h6>Passenger {index + 1}</h6>
            </div>
            <div className="card-body">
              <h6><strong>Name:</strong> {item.name}</h6>
              <h6><strong>Age:</strong> {item.age}</h6>
              <h6><strong>Seat No:</strong> {item.SeatNo}</h6>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={HandleButton} className='btn btn-primary'>Go To Home</button>
      </div>
    </div>
  );
}

export default Lastpage;
