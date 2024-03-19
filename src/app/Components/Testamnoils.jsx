import React from 'react'
import Image from 'next/image'
export default function Testamnoils() {
  return (
    <div className='container mx-auto mt-20'>
        <p style={{fontWeight:"400",fontSize:"18px",lineHeight:"20.63px",color:"#A7ABB6",textAlign:"center"}}>What our customer say</p>
        <h1 style={{fontSize:"40px",fontWeight:"700",lineHeight:"54px",color:"#202020",textAlign:"center",marginTop:"20px"}}>Testimonial</h1>
       <div className='flex justify-center mt-10'> <Image src="./Frame5.svg" alt='image' width={188} height={76} /></div>
        <p style={{fontSize:"32px",lineHeight:"48px",fontWeight:"400",color:"#202020",textAlign:"center",marginTop:"30px"}}>"Working with qpans has been a game-changer for our<br/>business. Their software not only meets our requirements but<br/> exceeds our expectations. The level of support and<br/> professionalism is unmatched."</p>
        <h1 style={{fontWeight:"700",fontSize:"20px",lineHeight:"30px",color:"#020B1F",font:"inter",textAlign:"center",marginTop:"15px"}}>Larry Pageim Fred & Sergey Brin</h1>
        <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"22px",font:"inter",textAlign:"center"}}>Sr. Director, Product owner</p>
    </div>
  )
}
