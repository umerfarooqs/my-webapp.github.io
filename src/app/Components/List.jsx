import React from 'react'

export default function List({text,color,fontSize}) {
  return (
    <li style={{marginLeft:"20px",marginRight:"20px"}}>
    <span>.</span>
    {text}
    {color}
    {fontSize}
    </li>
  )
}
