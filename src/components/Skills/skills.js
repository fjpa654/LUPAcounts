import React from 'react';
import './skills.css';
import SkillCard1 from '../../assets/skill1.png';
import SkillCard2 from '../../assets/skill2.png';
import SkillCard3 from '../../assets/skill3.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Skills</span>
            <span className="skillDesc">I am skilled at Accounting and bookkeeping Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={SkillCard1} alt="SkillOne" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Skill One</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisici.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={SkillCard2} alt="SkillTwo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Skill Two</h2>
                        <p>Maxime mollitia, molestiae quas vel sint commodi.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={SkillCard3} alt="SkillThree" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Skill Three</h2>
                        <p>voluptatum laborum  numquam blanditiis harum qui.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
