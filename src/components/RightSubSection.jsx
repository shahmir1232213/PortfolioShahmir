import React from 'react'
import './rightSubSection.css'
function RightSubSection() {
  const list = [{key:'Qualification',value:'BSCS'},{key:'In Progress',value:' YES'},{key:'Age',value:'20'},{key:'Experience',value:'Fresher'},
    
  ]
  return (
    <div className='rightSubSec'>
        <img src='/images/shahmir.jpg' />
        
          <div className='enroll'>
            {
            list.map((item,index)=>(
                <h4 key={index}>{item.key}: <span>{item.value}</span></h4>
            ))
          }
            </div>
        
    </div>
  )
}

export default RightSubSection