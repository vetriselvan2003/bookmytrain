import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { adduserdetail } from '../Slicers/userdetailSlicer';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [Name,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [PhoneNumber,setPhoneNumber]=useState('');
  const [TicketCount,setTicketCount]=useState('');
  const [BookingDate,setBookingDate]=useState('');
  const [From,setFrom]=useState('');
  const [To,setTo]=useState('');

  const dispatch=useDispatch();
  const navigate = useNavigate();

  function HandleRegisterButton(e){
    e.preventDefault();
    dispatch(adduserdetail({
        Name:Name,
        Email:Email,
        PhoneNumber:PhoneNumber,
        TicketCount:TicketCount,
        BookingDate:BookingDate,
        From:From,
        To:To}))
    navigate('/trains')
    }

    
  return (
    <div className="container my-5 p-sm-5 px-1 py-5 shadow">
      <h1 className="text-center mb-4">Register Page</h1>
      <div className="card p-sm-5 px-3 py-5">
        <form onSubmit={HandleRegisterButton}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control"  id="name"  onChange={(e) => setName(e.target.value)}  value={Name}  placeholder="Enter your name"  required/>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input  type="email"  className="form-control"  id="email"  onChange={(e) => setEmail(e.target.value)}  value={Email}  placeholder="Enter your email"  required/>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input  type="tel"  className="form-control"  id="phone"  onChange={(e) => setPhoneNumber(e.target.value)}  value={PhoneNumber}  placeholder="Enter your phone number"  required/>
          </div>

          <div className="mb-3">
            <label htmlFor="tickets" className="form-label">Number of Tickets</label>
            <input  type="number"  className="form-control"  id="tickets"  onChange={(e) => setTicketCount(e.target.value)}  value={TicketCount}  placeholder="Enter number of tickets"  required/>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">Booking Date</label>
            <input type="date"  className="form-control"  id="date"  onChange={(e) => setBookingDate(e.target.value)}  value={BookingDate}  required/>
          </div>

          <div className="mb-3">
            <label htmlFor="from" className="form-label">From</label>
            <select  className="form-control"  id="from"  onChange={(e) => setFrom(e.target.value)}  value={From}  required>
                <option value="" disabled>Starting location</option>
                <option value="chennai">chennai</option>
                <option value="madurai">Madurai</option>
                <option value="selam">Selam</option>
                <option value="trichy">Trichy</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="to" className="form-label">To</label>
            <select  className="form-control"  id="to"  onChange={(e) => setTo(e.target.value)}  value={To}  required>
                <option value="" disabled>Select a destination</option>
                <option value="chennai" >Chennai</option>
                <option value="madurai">Madurai</option>
                <option value="selam">Selam</option>
                <option value="coiambature">Coimbatore</option>
                <option value="trichy">Trichy</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
