import React from 'react'
import Button from './Button'

export default function Center5() {
  return (
    <div className='flex' style={{backgroundColor:"#0041E8",borderRadius:"32px",marginTop:"85px",marginLeft:"50px",marginRight:"50px",marginBottom:"70px"}}>
        <div><h1 style={{fontSize:"32px",fontWeight:"700",lineHeight:"43.2px",color:"#FFFFFF",marginTop:"55px",marginLeft:"40px"}}>Work Together with qpans</h1>
        <p style={{fontSize:"16px",fontWeight:"400",lineHeight:"28px",color:"#FFFFFF",marginTop:"20px",marginLeft:"40px",marginBottom:"40px"}}>Your success is our priority. We work closely with you to understand your unique needs<br/>and deliver tailored solutions.</p>
        </div>
        <div style={{marginTop:"100px",marginLeft:"172px"}}><Button style={{backgroundColor:"#FFFFFF",color:"black",borderRadius:"30px "}}>Book Free Consultation</Button></div>
    </div>
  )
}
