import React from 'react'
import Register from './component/pages/register'
import { Route, Routes } from 'react-router-dom'
import Trains from './component/pages/trains'
import PassengerDetails from './component/pages/passengerDetails'
import Lastpage from './component/pages/lastpage'
import Notfound from './component/pages/Notfound'

function App() {
  const train=[
    { name: "Pandian Express", available_seat: 50, start: "chennai", end: "madurai", time: "03:00 PM" },
    { name: "Vaigai Express", available_seat: 40, start: "chennai", end: "madurai", time: "08:00 PM" },
    { name: "Rockfort Express", available_seat: 35, start: "chennai", end: "trichy", time: "04:00 PM" },
    { name: "Cholan Express", available_seat: 20, start: "chennai", end: "trichy", time: "09:00 PM" },
    { name: "Pallavan Express", available_seat: 45, start: "chennai", end: "trichy", time: "06:30 AM" },
    { name: "Uzhavan Express", available_seat: 55, start: "chennai", end: "trichy", time: "02:30 PM" },
    { name: "Mysuru Express", available_seat: 60, start: "chennai", end: "selam", time: "05:30 PM" },
    { name: "Kovai Express", available_seat: 25, start: "chennai", end: "coimbatore", time: "06:00 AM" },
    { name: "Madurai Express", available_seat: 40, start: "madurai", end: "chennai", time: "07:00 PM" },
    { name: "Tejas Express", available_seat: 50, start: "madurai", end: "chennai", time: "11:00 PM" },
    { name: "Ananthapuri Express", available_seat: 20, start: "madurai", end: "trichy", time: "08:30 AM" },
    { name: "Nagercoil Express", available_seat: 55, start: "madurai", end: "selam", time: "09:00 AM" },
    { name: "Palakkad Express", available_seat: 65, start: "madurai", end: "coimbatore", time: "10:00 AM" },
    { name: "Jan Shatabdi Express", available_seat: 30, start: "trichy", end: "chennai", time: "02:00 PM" },
    { name: "Sethu Express", available_seat: 15, start: "trichy", end: "chennai", time: "05:30 PM" },
    { name: "Intercity Express", available_seat: 50, start: "trichy", end: "selam", time: "04:45 PM" },
    { name: "Cheran Express", available_seat: 70, start: "trichy", end: "coimbatore", time: "05:00 AM" },
    { name: "Nilgiri Express", available_seat: 80, start: "selam", end: "chennai", time: "06:30 PM" },
    { name: "Shatabdi Express", available_seat: 60, start: "selam", end: "chennai", time: "09:30 PM" },
    { name: "Tuticorin Express", available_seat: 40, start: "selam", end: "madurai", time: "07:45 PM" },
    { name: "Maveli Express", available_seat: 30, start: "selam", end: "madurai", time: "10:00 PM" },
    { name: "Coimbatore Express", available_seat: 15, start: "coimbatore", end: "chennai", time: "01:30 PM" }
  ];
  return (
    <div>  
        <Routes>
            <Route path='/trains' element={<Trains train={train} />} />
            <Route path='/' element={<Register />}></Route>
            <Route path='/passengerDetails' element={<PassengerDetails train={train} />}></Route>
            <Route path='/view' element={<Lastpage />} />
            <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
  )
}

export default App