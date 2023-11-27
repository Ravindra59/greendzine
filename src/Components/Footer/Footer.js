import React from 'react'
import './Footer.css'
import { useNavigate,useLocation } from 'react-router-dom'
export default function Footer() {
  const navigate=useNavigate()
  const location=useLocation()
  
  return (
    <div className='Footer-component' >
      <div className='Home-icon-section' style={{
        backgroundColor:location.pathname==="/dashboard" ? "#38383880":"#0F2323",
        width:"50%",display:"flex",justifyContent:"center",padding:"10px",borderRadius:"20px",marginLeft:"0px",marginTop:"-5px"}}>
        <img src='Home-icon.png' alt='home-icon' className='home-icon footer-icons' onClick={()=>navigate('/dashboard')}></img>
      </div>
      <div style={{
        backgroundColor:location.pathname==="/employee-list" ? "#38383880":"#0F2323",
        width:"50%",display:"flex",justifyContent:"center",padding:"10px",borderRadius:"20px",marginLeft:"0px",marginTop:"-5px"}}>
        <img src='User-icon.png' alt='user-icon' className='user-icon footer-icons'onClick={()=>navigate('/employee-list')}></img>
      </div>
    </div>
  )
}
