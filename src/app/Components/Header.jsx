import React from 'react'
import Menuitem from './Menuitem'

export default function Header() {
  return (
    <div className='flex'>
    <div className='flex gap-16 md:gap-8 sm:gap-4'>
        <Menuitem title="Home" address="/"/>
        <Menuitem title="About Us " address="/About"/>
        <Menuitem title="Services " address="/Services"/>
        <Menuitem title="Portfolio " address="/Portfolio"/>
        <Menuitem title="Pricing" address="/Pricing"/>
    </div>
    </div>
    
  )
}
