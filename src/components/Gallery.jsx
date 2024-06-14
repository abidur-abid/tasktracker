import React from 'react';
import doctor from '../assets/doctor.png'
import engineer from '../assets/engineer.png'
import student from '../assets/student.png'
import worker from '../assets/worker.png'
import scientist from '../assets/scientist.png'
import teacher from '../assets/teacher.png'
import fisherman from '../assets/fisherman.png'
import developer from '../assets/developer.png'
import assistant from '../assets/assistant.png'
import banker from '../assets/banker.png'
import blogger from '../assets/blogger.png'
import driver from '../assets/driver.png'

const Gallery = () => {
    return (
        <section>
            <div className="customContainer">
                <div className="customRow gallery">
                    <img src={doctor} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={engineer} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={student} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={worker} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={scientist} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={teacher} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={fisherman} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={developer} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={assistant} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={banker} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={blogger} className='hover:scale-105 hover:duration-1000' alt="image" />
                    <img src={driver} className='hover:scale-105 hover:duration-1000' alt="image" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;