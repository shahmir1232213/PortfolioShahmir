import React from 'react'
import NavBar from './components/NavBar'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import ProjectSection from './sections/ProjectSection'
import ProjectHeading from './sections/ProjectHeading'
import Section5 from './sections/Section5'
import Section5Heading from './sections/Section5Heading'

function App() {
  return (
    <>
       <NavBar />
       <Section1 />
       <Section2 />
       <ProjectHeading heading={'My Projects'} />
       <ProjectSection />
       <Section5Heading />
       <Section5 />
        <ProjectHeading heading={'Thank You!'} />
       {/* <SkillsList /> */}
    </>
  )
}

export default App