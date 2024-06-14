import abid from '../assets/abid.png'
import sumon from '../assets/sumon.jpg'
import safin from '../assets/safin.jpg'
import patan from '../assets/patan.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const TeamMember = () => {
    return (
        <section>
            <div className="customContainer">
                <div className="customRow teamMember lg:mt-32 " >
                    <div className="customColumn" data-aos="fade-right">
                        <img src={abid} className='teamImage' alt="image" />
                    </div>
                    <div data-aos="fade-left">
                        <h3 className='teamMemberName'>Abidur Rahman Abid</h3>
                        <p className='teamMemberDesignation'>Full Stack Developer</p>
                        <ul className='socialLink '>
                            <a href={''} ><FaLinkedin/></a>
                            <a href={''} ><FaInstagramSquare /></a>
                            <a href={''} ><FaTwitter /></a>
                            <a href={''} ><FaFacebook /></a>  
                        </ul>
                    </div>
                </div>
                <div className="customRow teamMember lg:flex lg:flex-row-reverse lg:mt-32" >
                    <div className="customColumn" data-aos="fade-right">
                        <img src={safin} className='teamImage' alt="image" />
                    </div>
                    <div data-aos="fade-left">
                        <h3 className='teamMemberName'>Shahriar Hasnat Shafin</h3>
                        <p className='teamMemberDesignation'>Software Engineer</p>
                        <ul className='socialLink lg:justify-end'>
                            <a href={''} ><FaLinkedin/></a>
                            <a href={''} ><FaInstagramSquare /></a>
                            <a href={''} ><FaTwitter /></a>
                            <a href={''} ><FaFacebook /></a>  
                        </ul>
                    </div>
                </div>
                <div className="customRow teamMember lg:mt-32" >
                    <div className="customColumn" data-aos="fade-right">
                        <img src={patan} className='teamImage' alt="image" />
                    </div>
                    <div data-aos="fade-left">
                        <h3 className='teamMemberName'>Shahin Ahmed Patan</h3>
                        <p className='teamMemberDesignation'>Advisor</p>
                        <ul className='socialLink '>
                            <a href={''} ><FaLinkedin/></a>
                            <a href={''} ><FaInstagramSquare /></a>
                            <a href={''} ><FaTwitter /></a>
                            <a href={''} ><FaFacebook /></a>  
                        </ul>
                    </div>
                </div>
                <div className="customRow teamMember lg:flex lg:flex-row-reverse lg:mt-32" >
                    <div className="customColumn" data-aos="fade-right">
                        <img src={sumon} className='teamImage' alt="image" />
                    </div>
                    <div data-aos="fade-left">
                        <h3 className='teamMemberName'>Sumon Ahmed Suhail</h3>
                        <p className='teamMemberDesignation'>Content Writer</p>
                        <ul className='socialLink lg:justify-end'>
                            <a href={''} ><FaLinkedin/></a>
                            <a href={''} ><FaInstagramSquare /></a>
                            <a href={''} ><FaTwitter /></a>
                            <a href={''} ><FaFacebook /></a>  
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMember;