import React from 'react'
import ImageC from './ImageC'
import Button from './Button'



export default function Center3() {
  return (
    <div>
        <div style={{marginTop:"150px"}}><p style={{fontSize:"16px",fontWeight:"400",color:"#A7ABB6",lineHeight:"18.3px",textAlign:"center"}}>Project</p>
        <h1 style={{fontSize:"40px",fontWeight:"700",lineHeight:"54px",color:"#202020",textAlign:"center",marginTop:"20px"}}>Successful Projects</h1>
        <p style={{fontSize:"16px",fontWeight:"400",lineHeight:"28px",color:"#A7ABB6",textAlign:"center",marginTop:"20px",paddingRight:"365px",paddingLeft:"279px"}}>success is not just a goal; it's a standard we strive for in every project we undertake. Our portfolio is a testament to the diverse range of successful projects that showcase our innovation, technical expertise, and unwavering commitment to delivering outstanding results.</p>
        </div>
        <div className='flex'>
          <div style={{marginLeft:"43px"}}><ImageC imageUrl="Bg1.svg" width="558px" height="529px">
          <div className='flex mt-10' style={{paddingTop:'385px'}}>
          <div className='w-7/12' style={{marginLeft:"22px"}}><h1 style={{fontSize:"32px",fontWeight:"700",lineHeight:"43.3px",color:"#FFFFFF"}}>Website Design</h1>
          <p style={{fontWeight:"400",fontSize:"16px",lineHeight:"28px",color:"#D1D4DC"}}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
          </div>
          <div style={{marginTop:"39px",marginLeft:"55px"}}><Button style={{backgroundColor:"transparent",color:"#FFFFFF",borderRadius:"30px"}}>Let's Work</Button></div>
          </div>
          
          </ImageC>
          </div>
          <div style={{marginLeft:"70px"}}>
          <div style={{marginTop:"35px"}}>
            <ImageC imageUrl="Bg2.svg" width="558px" height="252px">
            <div style={{paddingTop:"114px",paddingLeft:"56px"}}><h1 style={{fontSize:"24px",fontWeight:"700",lineHeight:"43.3px",color:"#FFFFFF"}}>Website Design</h1>
          <p style={{fontWeight:"400",fontSize:"16px",lineHeight:"28px",color:"#D1D4DC"}}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
          </div>
            </ImageC>
            </div>
            <div style={{marginTop:"33px"}}>
            <ImageC imageUrl="Bg2.svg" width="558px" height="252px">
            <div style={{paddingTop:"114px",paddingLeft:"56px"}}><h1 style={{fontSize:"24px",fontWeight:"700",lineHeight:"43.3px",color:"#FFFFFF"}}>Website Design</h1>
          <p style={{fontWeight:"400",fontSize:"16px",lineHeight:"28px",color:"#D1D4DC",}}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
          </div>
            </ImageC>
            </div>
          </div>
        </div>
    </div>
  )
}
