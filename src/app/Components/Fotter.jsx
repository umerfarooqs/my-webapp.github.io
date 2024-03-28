import React from 'react'
import Image from 'next/image'
import Fotters from './Fotters'
import Fotteritem from './Fotteritem'
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";


export default function Fotter() {
  return (
    <div className='container flex 2xl:justify-center xl:justify-center m-auto'>
        <div className='w-1/4' style={{marginLeft:"60px"}}>
            <Image src="./Footer.svg" alt='image' width={139.43} height={42}></Image>
            <p style={{fontSize:"16px",fontWeight:"500",lineHeight:"28px",color:"#A7ABB6"}}>Our software development company specializes in crafting robust, scalable, and secure software solutions compatible with any operating system, browser, or device.</p>
        </div>
        <div className='w-1/4' style={{marginLeft:"110px"}}><h1 style={{fontSize:"16px",fontWeight:"700",color:"000000"}}>Our Services</h1>
       <ul style={{fontSize:"16PX",color:"#A7ABB6",lineHeight:"40px",fontWeight:'400'}}>
        <Fotters></Fotters>
       </ul>
        </div>
        <div className='w-1/4'>
            <h1 style={{fontSize:"16px",fontWeight:"700",color:"400"}}>Quick Links</h1>
            <ul style={{fontSize:"16px",color:'#A7ABB6',lineHeight:"40px",fontWeight:'400'}}>
            <Fotteritem text="Beranda"></Fotteritem>
            <Fotteritem text="Program Keahlian"></Fotteritem>
            <Fotteritem text="Gallery"></Fotteritem>
            <Fotteritem text="Our News"></Fotteritem>

            
            </ul>
            

        </div>
        <div className='w-1/4'>
            <h1>Contact</h1>
            <ul style={{fontSize:"16px",color:'#A7ABB6',lineHeight:"40px",fontWeight:'400'}}>
                <span><FaPhoneAlt /></span><Fotteritem text="(406) 555-0120"></Fotteritem>
                <span><GrMail /></span><Fotteritem text="qpans@gmail.com"></Fotteritem>
                <span><FaLocationDot /></span><Fotteritem text="Lahore, Pakistan"></Fotteritem>
            </ul>

        </div>
    </div>
  )
}
