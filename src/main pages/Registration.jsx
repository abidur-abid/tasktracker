import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import RegistrationFrom from '../components/RegistrationFrom';

const Registration = () => {
    return (
        <>
         <SectionTitle title={'Please Register'}></SectionTitle>
         <RegistrationFrom></RegistrationFrom>
        </>
    );
};

export default Registration;