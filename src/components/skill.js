import React, { useEffect, useState } from 'react';
import '../style/skill.scss';
import skillImage from '../assests/skillimage.png';
const skillsData = [
    { name: 'JavaScript', experience: 80 },
    { name: 'React', experience: 60 },
    { name: 'Node.js', experience: 60 },
    { name: 'HTML/CSS', experience: 90 },
    { name: 'PHP', experience: 40 },
    { name: 'DSA', experience: 50 },
    // Add more skills and experience levels here
  ];
  
  const Skill = () => {
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setAnimate(true);
            }
          });
        },
        { threshold: 0.5 }
      );
  
      observer.observe(document.querySelector('.skills-container'));
  
      // Clean up the observer on component unmount
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
      <div className={`skills-container ${animate ? 'animate' : ''}`}>
        <div className="skill-image">
        <img src={skillImage} alt="Skill" />
      </div>
      <div className="skills-content">
        <h2>Skills</h2>
        
        <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-content">
              <div className="skill-name">{skill.name}</div>
              <div className="percentage">{skill.experience}%</div>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.experience}%` }}
              ></div>
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>
    );
  };
export default Skill;
