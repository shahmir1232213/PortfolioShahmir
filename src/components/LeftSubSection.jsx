import React from 'react'
import LeftSubSectionButton from '../Buttons/LeftSubSectionButton'
import './LeftSubSection.css'
function LeftSubSection() {
  const infoList = [
    'TypeScript', 'React Native',
    'React JS',
    'Express JS',
    'Ai Powered',
    'MongoDB', 'SQL',
  ]
  const cvLink = "https://videos12323.s3.ap-south-1.amazonaws.com/shahmir.pdf";
  const handleDownloadCV = () => {
    window.open("https://videos12323.s3.ap-south-1.amazonaws.com/shahmir.pdf", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/shahmir1232213", "_blank");
  };
  return (
    <div className='LeftSubSection'>
      <h1>
        Web & Mobile App Developer with MERN Stack, React Native, MongoDB, SQL & Cloud Deployment
      </h1>
      <div className='tags'>
        {infoList.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
      </div>
      <h3 className='priceDetails'>Available for Onsite <span className='green'>&</span><span className='gray'> Remote Roles</span></h3>
      <h5 className='scratchCard'>
         Let’s Connect on
        <a
          href="https://www.linkedin.com/in/muhammad-shahmir-siddiqui-a9b387291"
          target="_blank"
          rel="noopener noreferrer"
        >
           LinkedIn
        </a>
      </h5>

      <div className='buttons'>
        <LeftSubSectionButton text="Resume" handleClick={handleDownloadCV} />
        <LeftSubSectionButton text="GitHub" handleClick={handleGitHub} color={'true'} />
      </div>
      <h5 className='scratchCard'>Excited to Join<span> Innovative Teams</span></h5>
    </div>
  )
}

export default LeftSubSection
