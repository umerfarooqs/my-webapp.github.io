import React from 'react'
import Menuitem from './Menuitem'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto w-full'>
    <div className='flex gap-16'>
        <Menuitem title="Home" address="/"/>
        <Menuitem title="About Us " address="/About"/>
        <Menuitem title="Services " address="/Services"/>
        <Menuitem title="Portfolio " address="/Portfolio"/>
        <Menuitem title="Pricing" address="/Pricing"/>
    </div>
    </div>
    
  )
}
