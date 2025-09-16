import React, { useState } from 'react';
import './SkillsList.css';

function SkillsList() {
    const [activeIndex, setActiveIndex] = useState(null);

    const techStack = [
        { icon: 'node-icon.png', text: 'Node.js' },
        { icon: 'typeScipt.png', text: 'TypeScript' },
        { icon: 'react.png', text: 'React' },
        { icon: 'react.png', text: 'React Native' },
        { icon: 'cloud.png', text: 'AWS' },
        { icon: 'react.png', text: 'Redux Toolkit' },
        { icon: 'react.png', text: 'Debouncing' },
        { icon: 'react.png', text: 'Lazy Loading' },
        { icon: 'security.png', text: 'JWT Authentication' },
        { icon: 'google.png', text: 'Passport Authentication' },
        { icon: 'database.png', text: 'SQL' },
        { icon: 'database.png', text: 'MongoDB' },
    ];

    return (
        <div className='SkillListMain'>
            {techStack.map((item, index) => (
                <div
                    key={index}
                    className={`Lists ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                >
                    <div className='image'>
                        <img src={`/images/${item.icon}`} alt={item.text} />
                    </div>
                    <h1 className='skill'>{item.text}</h1>
                </div>
            ))}
        </div>
    );
}

export default SkillsList;
