import Link from 'next/link'
import React from 'react'
export default function Menuitem({title,address}) {
  return (
    <Link href={address} className='hover:text-blue-500'>
        <p className='uppercase'>{title}</p>
    </Link>
  )
}
