import { MdExplore } from "react-icons/md";
import task from '../assets/task.png'
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <section>
            <div className="customContainer">
                <div className="customRow">
                    <h1 className='headline'>Stay Organized, <br /> Stay Productive
                    Effortlessly <br /> Manage Your Tasks</h1>
                    <p className='subHeadline'>Your Ultimate Tool for Task Management <br />
                    Simplify Your Workflow and Achieve More</p>
                    <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    <img src={task} className=" mx-auto" alt="Task" />
                </div>
            </div>
        </section>
    );
};

export default Hero;