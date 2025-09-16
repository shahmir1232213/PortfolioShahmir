import React from 'react'
import './Section2Comp.css'
import Section2CompText from './Section2Text'
function Section2Comp({list}) {
  return (
    <div className='Section2CompMain'>
       {
        list.map((item,index)=>(
            <div className='Section2Comp' key={index}>
                <Section2CompText text={item.number} number={true}/>
                <Section2CompText text={item.text} number={false}/>
            </div>
        ))
    }
       </div>
    
  )
}

export default Section2Comp