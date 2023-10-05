import React, { useEffect, useState } from 'react';
import '../style/about.scss';
import developerImage from '../assests/devloperImage.png'; // Import your developer image
import resumePDF from '../assests/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`about ${animate ? 'about-animate' : ''}`}>
      <div className="about-content">
        <div className="about-text">
          <div className="about-heading">
            Hi, I'm Myself preet chahal
          </div>
          <div className="about-description">
            A passionate mern stack developer from India
            A passionate mern stack developer from India
            A passionate mern stack developer from India
            A passionate mern stack developer from India
            A passionate mern stack developer from India
            A passionate mern stack developer from India
            {/* ... (your description) ... */}
          </div>
          <div className="resume-button">
            <a href={resumePDF} download="resume.pdf">
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} />
              Download Resume
            </a>
          </div>
        </div>
        <div className="developer-image">
          <img className="developer-img" src={developerImage} alt="Developer" />
        </div>
      </div>
    </div>
  );
};

export default About;
