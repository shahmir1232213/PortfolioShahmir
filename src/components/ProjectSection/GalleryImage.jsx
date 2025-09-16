import React from 'react'
import './GalleryImage.css'

function GalleryImage({image}) {
  return (
    <div className='imageDiv'>
        <img src={image} />
    </div>
  )
}

export default GalleryImage