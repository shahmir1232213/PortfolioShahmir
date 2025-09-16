import React from 'react'
import './ImageSubSection.css'
import GalleriesColumn from './GalleriesColumn'
import GalleryImage from './GalleryImage'
function ImageSubSections({right}) {
    if (!right){
        return (
        <div className='ImageSubSectionMain'>
            <GalleriesColumn image1={'https://www.sheryians.com/images/placement/Placement1.jpg'} image2={'https://www.sheryians.com/images/placement/placement2.jpg'} bottom={true}/>
            <GalleriesColumn image1={'https://www.sheryians.com/images/placement/placement11.jpeg'} image2={'https://www.sheryians.com/images/placement/placement5.jpg'}/>
            <GalleriesColumn centre={true} image1={'https://www.sheryians.com/images/placement/placement3.jpg'}/>
        </div>
        )
    }
    else{
        return (
        <div className='ImageSubSectionMain'>
            <GalleriesColumn centre={true} image1={'https://www.sheryians.com/images/placement/placement3.jpg'}/>
            <GalleriesColumn image1={'https://www.sheryians.com/images/placement/placement11.jpeg'} image2={'https://www.sheryians.com/images/placement/placement5.jpg'}/>
             <GalleriesColumn image1={'https://www.sheryians.com/images/placement/Placement1.jpg'} image2={'https://www.sheryians.com/images/placement/placement2.jpg'} bottom={true}/>
        </div>
        )
    }
}

export default ImageSubSections