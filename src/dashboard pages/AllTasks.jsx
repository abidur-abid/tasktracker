import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import TaskTable from '../components/TaskTable';

const AllTask = () => {
    return (
        <div className='dashboardPage'>
         <SectionTitle title={'All Tasks'}></SectionTitle>
         <TaskTable></TaskTable>
        </div>
    );
};

export default AllTask;