import React from 'react';
import mission from '../assets/mission.png';
import { MdExplore } from "react-icons/md";
import { Link } from 'react-router-dom';

const MissionBanner = () => {
    return (
        <section>
            <div className="customContainer">
                <div className="customRow">
                    <h1 className='headline'>Empowering Productivity  and Efficiency</h1>
                    <p className='subHeadline'>To Help You Stay Organized  and Achieve More with Seamless Task Management</p>
                    <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    <img src={mission} className=" mx-auto" alt="Task" />
                </div>
            </div>
        </section>
    );
};

export default MissionBanner;
