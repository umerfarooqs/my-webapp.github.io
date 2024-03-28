import React from 'react'
import Button from './Button'
import Image from 'next/image'
export default function Center4() {
  return (
    <div style={{marginTop:"150px", margin:"auto"}} className='container'>
    <div className='flex'>
        <div style={{marginLeft:"110px"}}><p style={{fontWeight:"400",color:"#A7ABB6",lineHeight:"18.63px",fontSize:"16px"}} className='w-1/2	'>Inpiration</p>
        <h1 style={{fontSize:"40px",lineHeight:"54px",fontWeight:"700",color:"#202020",marginTop:"15px"}}>UI Design Exploration</h1>
        <p style={{fontSize:"16px",fontWeight:"400",lineHeight:"28px",color:"#A7ABB6",marginTop:"20px"}}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
        </div>
        <div className='w-1/2' style={{marginTop:'100px',marginLeft:"271px"}}>
          <Button>View Our Project</Button>
        </div>
    </div>
    <div>
      <Image src="./Center4.svg" alt="Image" width={1441} height={489} style={{marginTop:"36px"}}></Image>
    </div>
    </div>
  )
}
