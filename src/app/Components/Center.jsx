import React from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Center() {
  return (
    <div className='flex' style={{marginTop:"50px"}}>
    <div>
    <Image src="./center.svg" alt="Image" width={324} height={298} style={{marginLeft:"68px"}}></Image>
    </div>
    <div className='flex' style={{boxShadow:"2px 2px 7px -3px",marginLeft:"43px"}}>
        <div><h1 style={{fontSize:"40px",fontWeight:"700",marginTop:"44px",marginLeft:"20px",lineHeight:"54px"}}>Trusted<br/>Partner</h1><p style={{fontSize:"18px",fontWeight:"400",marginLeft:"20px"}}>Backed by a team<br></br> of seasoned<br></br> professionals with<br></br> diverse expertise.</p></div>
        <div style={{fontSize:"40px",fontWeight:"900",color:"blue",lineHeight:"54px",marginTop:"117px",marginLeft:"57px"}}>200+<br></br><p style={{fontSize:"18px",fontWeight:"400",lineHeight:"28px",color:"black",marginTop:"12px"}}>Completed Projects</p></div>
        <div style={{marginTop:"117px",marginLeft:"33px"}}><span style={{fontSize:"40px",fontWeight:"900",color:"blue",marginTop:"117px"}}>1,230</span><br></br><span style={{fontSize:"18px",fontWeight:"400",lineHeight:"28px",marginTop:"12px"}}>Client Trusted</span></div>
        <div style={{marginTop:"152px",marginLeft:"60px",marginRight:"30px"}}><Button>Let&apos;s work</Button></div>
    </div>
    </div>
  )
}
