import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdMenu } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { GrResources } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { IoMdLogIn } from "react-icons/io";
import useAuth from '../hooks/useAuth';
import { LuLayoutDashboard } from "react-icons/lu";


const Header = () => {
    // mobile menu state
    const [mobileMenu, setMobileMenu] = useState(true);

    // mobile menu function
    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const {user} = useAuth();

    return (
        <header>
            <div className="">
                <div className="headerRow">
                    {/* website logo */}
                    <Link to={'/'}>
                    <div className="">
                        <img src={logo} className='logo' alt="Logo" />
                    </div></Link>
                    {/* mobile navBar */}
                    <div className="lg:invisible">
                        <button onClick={handleMobileMenu} className='mobileMenu relative'>
                            {
                                mobileMenu ?
                                    <MdMenu /> :
                                    <nav className='absolute top-0 -right-5 mobileNavLink'>
                                        <RiCloseLargeLine className='my-2' />
                                        <Link to="/" className='navigationLink'><GoHomeFill />Home</Link>
                                        <Link to="/team" className='navigationLink'><RiTeamFill />Team</Link>
                                        <Link to="/mission" className='navigationLink'><GoGoal />Mission</Link>
                                        <Link to="/features" className='navigationLink'><GrResources />Features</Link>
                                        <Link to="/contact" className='navigationLink'><GrContact />Contact</Link>
                                        {
                                            user? <Link to="/dashboard/profile" className='navigationLink'><LuLayoutDashboard />Dashboard</Link> : <Link to="/login" className='navigationLink'><IoMdLogIn />Login</Link>
                                        }
                                        
                                    </nav>
                            }
                        </button>
                    </div>
                    {/* laptop navBar */}
                    <div className='hidden lg:inline'>
                        <nav className="laptopNav">
                            <Link to="/" className='navigationLink'><GoHomeFill />Home</Link>
                            <Link to="/team" className='navigationLink'><RiTeamFill />Team</Link>
                            <Link to="/mission" className='navigationLink'><GoGoal />Mission</Link>
                            <Link to="/features" className='navigationLink'><GrResources />Features</Link>
                            <Link to="/contact" className='navigationLink'><GrContact />Contact</Link>
                            {
                                user ? <Link to="/dashboard/profile" className='primaryButton'><LuLayoutDashboard />Dashboard</Link> : <Link to="/login" className='primaryButton'><IoMdLogIn />Login</Link>
                            }
                            
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
