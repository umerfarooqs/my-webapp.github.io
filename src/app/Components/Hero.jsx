import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div style={{marginTop:"100px"}} className='flex 2xl:justify-center xl:justify-center'>
    <div style={{marginTop:"134px"}}>
      <Image src="/Vector1.png" alt="Logo Image" width={38} height={38} style={{marginLeft:"105px"}}></Image>
      <Image src="/Frame2.png" alt="Logo Image" width={213} height={152}></Image>
    </div>
    <div>
        <p style={{fontSize:"18px",lineHeight:"24.3px",textAlign:"center"}}>Develop Excellence With Us</p>
        <h1 style={{fontSize:"64px",fontWeight:"700",textAlign:"center",lineHeight:"80px",font:"Satoshi",marginTop:"20px"}}>We provide <span className='text-blue-600	'>q</span>uality <br/> <span className='text-blue-600	'>p</span>rogramming <span className='text-blue-600	'>a</span>ssistance <br/> and <span className='text-blue-600'>s</span>olutions</h1>
        <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"32px",textAlign:"center",marginTop:"20px"}}>With us achieving dreams in building your products, together say “Yes”<br></br> to extraordinary solutions.</p>
    </div>
    
    <div style={{marginTop:"77px"}}>
    <Image src="/Vector2.png" alt="Logo Image" width={38} height={38} style={{marginLeft:"31px"}}></Image>
      <Image src="/Frame3.png" alt="Logo Image" width={217} height={85}></Image>
    </div>
    </div>
  )
}
