import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <>
         <SectionTitle title={'Please Login'}></SectionTitle>
         <LoginForm></LoginForm>
        </>
    );
};

export default Login;