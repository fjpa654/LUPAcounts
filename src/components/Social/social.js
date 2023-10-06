import React from 'react';
import './social.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram-icon.png';
import YouTubeIcon from '../../assets/youtube-icon.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';


const Social = () => {
    return (
        <section id="socialPage">
            <div className="links">
                <img src={FacebookIcon} alt="Facebook" className="link" />
                <img src={InstagramIcon} alt="Instagram" className="link" />
                <img src={YouTubeIcon} alt="YouTube" className="link" />
                <img src={LinkedInIcon} alt="LinkedIn" className="link" />
            </div>
        </section>
    );
};

export default Social;
