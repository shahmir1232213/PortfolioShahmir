import React from 'react'
import './section2.css'
import Section2Comp from '../components/Section2Comp'
function Section2() {
  const list = [{number:'2+',text:'Years'},{number:'12+',text:'Projects'},{number:'5+',text:'Certificates'}]
  return (
    <div className='Section2'>
        <div>
            <h1 className='Section2 title head bloom'>MERN Stack</h1>
            <h1 className='Section2 title head'>MERN Stack</h1>
        </div>    
        <h3 className='Section2 subtitle head'>Experienced in building full-stack web & mobile apps using modern technologies</h3>
        <Section2Comp list={list}/>
    </div>

  )
}

export default Section2