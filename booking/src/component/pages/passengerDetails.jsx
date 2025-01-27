import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addpassengers } from '../Slicers/passengerdetailSlicer'
import { useNavigate } from 'react-router-dom'

function PassengerDetails({train}) {
    const user=useSelector(state=>state.userdetail)
    const no_of_tickets=user.TicketCount
    const dateofbooking=user.BookingDate
    const dispatch=useDispatch()
    const redirect=useNavigate()
    const [passengers,setPassengers]=useState([])
    const selectedtrain=useSelector(state=>state.selectedtrain)

    useEffect(()=>{
      const passengerList=Array.from({length:no_of_tickets},()=>({name:'',age:''}));
      setPassengers(passengerList);
    },[no_of_tickets]);


    function HandlePassengerName(value,index){
      let updatapassengerslist=[...passengers]
      updatapassengerslist[index]["name"]=value
      setPassengers(updatapassengerslist)
    }

    function HandlePassengerAge(value,index){
      let updatapassengerslist=[...passengers]
      updatapassengerslist[index]["age"]=value
      setPassengers(updatapassengerslist)
    }

    function Handlebooking(e){
      e.preventDefault();
      passengers.forEach(element => {
        let seatno=Math.floor(Math.random()*100);
        while(passengers.some(item=>item.seatno===seatno)){
          seatno=Math.floor(Math.random()*100);
        }
        element.SeatNo=seatno;
      });
      dispatch(addpassengers(passengers))
      const adtrains={
      ...selectedtrain,
      available_seat:selectedtrain.available_seat-no_of_tickets,
      date:dateofbooking}
      train.unshift(adtrains)
      redirect('/view')
    }
  return (
    <div className="container my-5">
        <h1 className="text-center mb-4">Passenger Details</h1>
        <form onSubmit={Handlebooking}>
        {passengers.map((item,index)=>(
          <div className="mb-3" key={index}>
            <h3 className="mb-3" >passenger {index+1}</h3>

            <div className="row">
              <div className="col-md-6 p-2">
                <input type='text'  className="form-control" placeholder='Enter Passenger Name' value={item.name} onChange={(e)=>HandlePassengerName(e.target.value,index)} required />
              </div>

              <div className="col-md-6 p-2">
              <input type='number'  className="form-control" placeholder='Enter Passenger Age' value={item.age} onChange={(e)=>HandlePassengerAge(e.target.value,index)} required />
              </div>
            </div>

          </div>
        ))}
        <button type='submit' className="btn btn-primary">BOOK NOW</button>
        </form>
    </div>
  )
}

export default PassengerDetails