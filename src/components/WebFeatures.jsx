import { FaTasks } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { GrIntegration } from "react-icons/gr";
import { BiSolidReport } from "react-icons/bi";
import { BiSolidCustomize } from "react-icons/bi";
import { TbAccessibleFilled } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdExplore } from "react-icons/md";

const WebFeatures = () => {
    return (
        <section>
            <div className="customContainer">
                <div className="customRow lg:grid lg:grid-cols-3 gap-10 lg:justify-center lg:items-start">
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <FaTasks className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Task Management</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Intuitive Task Creation: Easily create tasks with just a few clicks.</li>
                            <li>Task Prioritization: Assign priority levels to tasks to ensure important items are addressed first.</li>
                            <li>Due Dates and Deadlines: Set due dates and deadlines to keep track of important timelines.</li>
                            <li>Recurring Tasks: Automate repetitive tasks with customizable recurrence options.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <RiTeamFill className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Collaboration</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Real-Time Collaboration: Work together with your team in real-time, ensuring everyone stays on the same page.</li>
                            <li>Task Assignment: Assign tasks to team members with clear responsibility and accountability.</li>
                            <li>Comments and Feedback: Leave comments on tasks to provide feedback and updates.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <IoNotifications className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Notifications and Reminders</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Customizable Notifications: Set up notifications for task updates, deadlines, and comments.</li>
                            <li>Email and Push Notifications: Receive alerts via email or push notifications on your devices.</li>
                            <li>Daily and Weekly Summaries: Get summarized reports of your tasks and progress.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <GrIntegration className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Integrations</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Calendar Sync: Sync your tasks with popular calendar apps like Google Calendar and Outlook.</li>
                            <li>Third-Party App Integrations: Integrate with other productivity tools such as Slack, Trello, and Asana.</li>
                            <li>API Access: Use our API to integrate Task Tracker with your own apps and services.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <BiSolidReport className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Reporting and Analytics</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Progress Tracking: Monitor the progress of individual tasks and overall projects.</li>
                            <li>Productivity Insights: Analyze your productivity trends and identify areas for improvement.</li>
                            <li>Custom Reports: Generate custom reports to suit your specific needs.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <BiSolidCustomize className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Customization</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Custom Task Views: Choose from different views such as list, board, and calendar to manage tasks your way.</li>
                            <li>Themes and Colors: Personalize your Task Tracker interface with various themes and color options.</li>
                            <li>Custom Fields: Add custom fields to tasks to capture additional information.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <TbAccessibleFilled className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Accessibility</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Cross-Platform Access: Access Task Tracker from any device, whether it's a desktop, tablet, or mobile.</li>
                            <li>Offline Mode: Work on your tasks even when you're offline, and sync them when you're back online.</li>
                            <li>Accessibility Features: Designed with accessibility in mind to ensure everyone can use Task Tracker effectively.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                    <div className="customColumn flex flex-col bg-primaryColor rounded-lg p-10 mt-5 lg:mt-0 h-full">
                        <MdOutlineSecurity className="w-20 h-20 mx-auto" />
                        <h4 className="subHeadline mt-5">Security</h4>
                        <ul className="my-10 flex-grow list-disc pl-5">
                            <li>Data Encryption: All your data is encrypted both in transit and at rest.</li>
                            <li>User Permissions: Manage user roles and permissions to control access to sensitive information.</li>
                            <li>Two-Factor Authentication (2FA): Add an extra layer of security to your account with 2FA.</li>
                        </ul>
                        <Link to={'/dashboard/profile'}><button className='secondaryButton mx-auto'><MdExplore />Let's Explore</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebFeatures;
