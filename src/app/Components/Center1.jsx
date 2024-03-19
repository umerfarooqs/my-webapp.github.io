import React from 'react'
import Image from 'next/image'

export default function Center1() {
  return (
    <div style={{marginTop:"150px",marginLeft:"76px",color:"#A7ABB6"}} className='flex'>
        <div><p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20.63px"}}>Why Choose Us</p><br></br>
        <h1 style={{fontSize:"40px",fontWeight:"700",lineHeight:"54px",color:"#202020"}}>Fast Work is our focus</h1>
        <p style={{color:"#A7ABB6",fontSize:"18PX",fontWeight:"400",lineHeight:"28PX",marginTop:"28px"}}>Quality is at the core of what we do. Rigorous testing<br></br> processes guarantee top-tier performance and<br></br> reliability in every solution we deliver. As your<br></br> strategic partner, we are dedicated to your success.</p>
        
        </div>
        <div className='flex'>
        <div>
            <p style={{fontWeight:"500",fontSize:"24px",lineHeight:"32.4px",color:"#202020",paddingLeft:"67px"}}>Timeline</p>
            <Image src="./Frameim1.svg" alt="Image" width={245} height={47} style={{marginTop:"34px",marginLeft:"70px"}}></Image>
        <Image src="./Frameim2.svg" alt="Image" width={313} height={47} style={{marginLeft:"162px"}}></Image>
        <Image src="./Frameim3.svg" alt="Logo Image" width={272} height={47} style={{marginLeft:"272px"}}></Image>
        </div>
        <div className='flex items-center' style={{marginBottom:"257px"}}>
        <div className='mr-6'>
            
      <input type="radio" id="option1" name="option" value="option1"/>
      <label htmlFor="option1" style={{fontSize:"12px",fontWeight:"400",lineHeight:"13.75px"}}>Done process</label><br></br>
      </div>
      <div>

      <input type="radio" id="option2" name="option" value="option2" />
      <label htmlFor="option2" style={{fontSize:"12px",fontWeight:"400",lineHeight:"13.75px"}}>On process</label>
      </div>
      
    
        </div>
        </div>
    </div>
  )
}
