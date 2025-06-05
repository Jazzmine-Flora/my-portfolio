import React from 'react';
import githubIcon from '../assets/social.png';
import linkedinIcon from '../assets/linkedin.png';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/taliba-sadiq" target="_blank" rel="noopener noreferrer">
                    <img className='icon' src={linkedinIcon} alt="LinkedIn"/>
                    LinkedIn
                </a>
                <a href="https://github.com/Jazzmine-Flora" target="_blank" rel="noopener noreferrer">
                    <img className='icon' src={githubIcon} alt="GitHub"  />
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;