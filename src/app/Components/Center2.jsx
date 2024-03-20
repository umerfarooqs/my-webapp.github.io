import React from 'react'
import Image from 'next/image'
import Button from './Button'
export default function Center2() {
  return (
    <div className='flex' style={{marginTop:"100px"}}>
        <div style={{marginLeft:"53px"}}>
            <Image src="./Frame4.svg" alt="Image" width={570} height={451}></Image>
        </div>
        <div style={{marginLeft:"176px",marginRight:"100px"}}>
            <p style={{fontWeight:"400",fontSize:"18px",lineHeight:"20.63px",color:"#A7ABB6"}}>Who We are</p>
            <h1 style={{fontSize:"40px",fontWeight:"400",lineHeight:"54px",color:"#202020",marginTop:"35px"}}>Trusted 100% by many people Gradually</h1>
            <p style={{fontWeight:"400",fontSize:"18px",lineHeight:"28px",color:"#A7ABB6",marginTop:"25px",marginBottom:"25px"}}>Our development process is not just about delivering a product, it&apos;s about building a partnership.</p>
            <Button>Let’s work together</Button>
        </div>
    </div>
  )
}
