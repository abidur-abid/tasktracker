import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import ToDoSection from '../components/ToDoSection';

const ToDo = () => {
    return (
        <div className='dashboardPage'>
            <SectionTitle title={'All Tasks'}></SectionTitle>
            <ToDoSection></ToDoSection>
        </div>
    );
};

export default ToDo;