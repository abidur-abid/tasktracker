import task from '../assets/task.gif'
import productivity from '../assets/productivity.gif'
import team from '../assets/team.gif'

const Missions = () => {
    return (
        <section>
            <div className="customContainer">
                <div className="customRow lg:flex lg:justify-between lg:items-center lg:gap-20">
                    <div className="customColumn border-2 border-primaryColor rounded px-5 py-5">
                        <img src={task} alt="image" className='w-20 h-20 mx-auto'/>
                        <h4 className='subHeadline font-semibold '>Simplify Task Management</h4>
                        <p className='text-justify'>At Task Tracker, our mission is to make task management effortless for individuals and teams. We believe that managing tasks should be intuitive and stress-free. By providing a user-friendly interface and powerful features, we aim to help you stay organized, prioritize effectively, and achieve your goals with ease. Whether you're working on personal projects or collaborating with a team, Task Tracker is here to streamline your workflow and boost your productivity.</p>
                    </div>
                    <div className="customColumn my-16 border-2 border-primaryColor rounded px-5 py-5">
                        <img src={productivity} alt="image" className='w-20 h-20 mx-auto'/>
                        <h4 className='subHeadline font-semibold '>Empower Productivity</h4>
                        <p className='text-justify'>Our mission at Task Tracker is to empower you to be more productive and efficient in your daily tasks. We understand that staying on top of your tasks can be challenging, especially in a fast-paced world. That's why we are dedicated to providing tools that simplify task management and help you focus on what matters most. With features like real-time collaboration, customizable reminders, and cross-platform access, Task Tracker is designed to support your productivity journey and help you accomplish more.</p>
                    </div>
                    <div className="customColumn border-2 border-primaryColor rounded px-5 py-5">
                        <img src={team} alt="image" className='w-20 h-20 mx-auto'/>
                        <h4 className='subHeadline font-semibold '>Enhance Team Collaboration</h4>
                        <p className='text-justify'>Task Tracker is committed to enhancing collaboration and success within teams. Our mission is to create a seamless and effective task management experience that fosters teamwork and communication. We provide real-time collaboration tools that allow team members to work together effortlessly, share updates, and stay aligned on project goals. By reducing the complexity of task management, Task Tracker helps teams focus on their objectives, meet deadlines, and achieve collective success.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Missions;