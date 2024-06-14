import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { GrResources } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <footer>
         <div>
            <div className="footerRow">
                <div className="customColumn">
                    <h3 className="footerLogo">Get In Touch</h3>
                    <p className="info">I will be happy to talk with you. Just contact me by any media,<br/> which are mentioned on this website!</p>
                    <ul className='socialLink'>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagramSquare /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebook /></a>
                    </ul>
                </div>
                <div className="customColumn mt-10 lg:mt-20">
                    <h3 className="footerLogo">Website Pages</h3>
                    <ul>
                        <li><Link to="/" className='footerLink'><GoHomeFill />Home</Link></li>
                        <li><Link to="/team" className='footerLink'><RiTeamFill />Team</Link></li>
                        <li><Link to="/mission" className='footerLink'><GoGoal />Mission</Link></li>
                        <li><Link to="/features" className='footerLink'><GrResources />Features</Link></li>
                        <li><Link to="/contact" className='footerLink'><GrContact />Contact</Link></li>
                    </ul>
                </div>
                <div className="customColumn mt-10 lg:mt-0">
                    <h3 className="footerLogo">Important Features</h3>
                    <ul>
                        <li><Link to="/add-task" className="footerLink"><MdAddCircleOutline /> Add Task</Link></li>
                        <li><Link to="/modify-task" className="footerLink"><FaEdit />Modify Task</Link></li>
                        <li><Link to="/delete-task" className="footerLink"><RiDeleteBin6Line /> Delete Task</Link></li>
                    </ul>
                </div>
            </div>
            <div className="developerInfo">
                <p>Designed and Developed by <Link to="/about" className="underline">Abidur Rahman Abid</Link></p>
            </div>
         </div>
       </footer>
    );
};

export default Footer;
