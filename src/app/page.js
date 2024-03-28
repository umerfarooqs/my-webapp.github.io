import React from 'react'
import Header from "./Components/Header";
import Image from 'next/image';
import Button from './Components/Button';
import Hero from './Components/Hero';
import Listitem from './Components/Listitem';
import Center from './Components/Center';
import Center1 from './Components/Center1';
import Center2 from './Components/Center2';
import Center3 from './Components/Center3';
import Center4 from './Components/Center4';
import Testamnoils from './Components/Testamnoils';
import Center5 from './Components/Center5';
import Fotter from './Components/Fotter';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
export default function Home() {
  return (
    <div>
    <div className='flex 2xl:justify-center xl:justify-center'>
    <div style={{ marginTop: '30px', marginLeft: '150px' }}><Image src="/logo.png" alt="Logo Image" width={139} height={42} />
</div>
    <div style={{ marginTop: '30px', marginLeft: '40px',fontSize:"16px" }} className='flex justify-between items-center  max-w-6xl mx-auto w-full'>
    <Header/>
    </div>
    <div style={{marginTop:"24px",marginLeft:"40PX",fontSize:"16px"}}><Button style={{backgroundColor:"#FFFFFF",color:"#000000",borderRadius:"30px",hover:"red"}}>Let&apos;s Talk</Button></div>
    </div>
    <div className='2xl:justify-center'>
    <Hero></Hero>
    <div style={{marginTop:"40px",alignItems:"center"}}>
    <Listitem/>
    </div>
    </div>
    <div className='flex justify-center' style={{marginTop:"40px"}}>
      <Button>Start a Project</Button>
    </div>
    <div className='flex justify-center mt-12 gap-10'>
    <div className='rounded-full'><Link href="https://example.com"><CiFacebook /></Link></div>
    
    <div className='rounded-full'><Link href="https://example.com"><FaXTwitter /></Link></div>
    <div className='rounded-full'><Link href="https://example.com"><BiLogoGmail /></Link></div>
    <div className='rounded-full drop-shadow-2xl'><Link href="https://example.com"><FaLinkedinIn /></Link></div>
    </div>
    <div>
      <Center></Center>
    </div>
    <div><Center1></Center1></div>
    <div><Center2></Center2></div>
    <dv><Center3></Center3></dv>
    <div className='flex justify-center' style={{marginTop:"40px"}}><Button>View Our Project</Button></div>
    <Center4></Center4>
    <Testamnoils></Testamnoils>
    <Center5></Center5>
    <Fotter></Fotter>
    </div>



    
  )
}
