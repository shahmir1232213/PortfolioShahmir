import React from 'react'
import './GalleriesColumn.css'
import GalleryImage from './GalleryImage'
function GalleriesColumn({ bottom, centre,image1,image2 }) {
    {
        if (!centre)
            return (
                <div className={bottom ? `GalleriesColumnMain simple` : `GalleriesColumnMain bottom`}>
                    <GalleryImage image={image1}/>
                    <GalleryImage  image={image2}/>
                </div>
            )
        else
            return(
                  <div className='GalleriesColumnMain centre'>
                    <GalleryImage image={image1}/>
                </div>
            )
    }


}

export default GalleriesColumn