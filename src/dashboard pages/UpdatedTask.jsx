import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import UpdatedTaskForm from '../components/UpdatedTaskForm';

const UpdatedTask = () => {
    return (
        <div className='dashboardPage'>
            < SectionTitle title={'Update The Task'}></SectionTitle>
            <UpdatedTaskForm></UpdatedTaskForm>
        </div>
    );
};

export default UpdatedTask;