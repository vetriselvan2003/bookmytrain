import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh',textAlign:'center'}}>
      <h1 style={{ fontSize: '3rem', color: '#ff4d4d' }}>404</h1>
      <p style={{color:'#333' }}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{marginTop:'20px',padding:'10px 20px',backgroundColor:'#007bff',color:'#fff',textDecoration:'none',borderRadius:'5px'}}>Go Back to Home</Link>
    </div>
  );
}

export default Notfound;
