import React from 'react'
import List from './List'

export default function Listitem() {
  return (
    <div>
        <ul className='flex justify-center'>
            <List text="Innovation"></List>
            <List text="Quality Assurance"></List>
            <List text="Tailored Solutions"></List>
            <List text="Ethical Business Practices"></List>
            <List text="Development"></List>
        </ul>
    </div>  
  )
}
