import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import AddTaskForm from '../components/AddTaskForm';

const AddTask = () => {
    return (
        <div className='lg:-ml-60 md:-ml-60 '>
         <SectionTitle title={'Add A New Task'}></SectionTitle>
         <AddTaskForm></AddTaskForm>
        </div>
    );
};

export default AddTask;