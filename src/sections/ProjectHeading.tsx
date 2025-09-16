import React from 'react'
import './ProjectHeading.css'

function ProjectHeading({heading}) {
  return (
    <div style={{ position: "relative", display: 'flex', justifyContent:'center'}}>
      <h1 className="ProjectHeader bloom2">{heading}</h1>
      <h1 className="ProjectHeader">{heading}</h1>
    </div>
  )
}

export default ProjectHeading
