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
import Link from 'next/link';
export default function Home(){
  return (
    <div className=''>
    <div className='flex 2xl:justify-center xl:justify-center md:justify-center sm:justify-center gap-60'>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><Image src="/logo.png" alt="Logo Image" width={139} height={42} />
</div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className='gap-12'>
    <Header/>
    </div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><Button style={{backgroundColor:"#FFFFFF",color:"#000000",borderRadius:"30px",hover:"red"}}>Let&apos;s Talk</Button></div>
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
    <div className=''><Link href="/example1"><Image src="/Imgf1.svg" alt='icons' width={80} height={80}></Image></Link></div>
    <div className=''><Link href="/example2"><Image src="/Imgf2.svg" alt='icons' width={80} height={80}></Image></Link></div>
    <div className=''><Link href="/example3"><Image src="/Imgf3.svg" alt='icons' width={80} height={80}></Image></Link></div>    
    <div className=''><Link href="/example4"><Image src="/Imgf4.svg" alt='icons' width={80} height={80}></Image></Link></div> 
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
