import React from 'react'
import './LeftSubSectionButton.css'

function LeftSubSectionButton({ text, color,handleClick }) {
 

  return (
    <button
      className={color ? "LeftSubSectionButton color" : "LeftSubSectionButton"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default LeftSubSectionButton
