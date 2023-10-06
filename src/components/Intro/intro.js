import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/btnImg.png';
import { Link } from 'react-scroll';
// import btimg from '../../assets/LetsConnect.png'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent"> {/* Fix the class name here */}
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Luis </span>
                 <br/> Bookkeeper and Accountant</span>
                 <p className="introPara"> I am a skilled Accountant<br /> with experience in bookkeeping</p>
                 <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Let's Connect!</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" /> {/* Fix the 'serc' to 'src' */}
        </section>
    )
}

export default Intro;
