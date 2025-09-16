import React from 'react'
import './Section2Text.css'

function Section2Text({ text,number }) {
  return (
   <p className={number ? 'numberClass' : 'textClass'}>{text}</p>
  )
}

export default Section2Text