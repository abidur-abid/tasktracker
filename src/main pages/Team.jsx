import React from 'react';
import SectionTitle from '../shared components/SectionTitle';
import TeamMember from '../components/TeamMember';

const Team = () => {
    return (
        <>
         <SectionTitle title={'Our Dynamic Team'}></SectionTitle>
         <TeamMember></TeamMember>
        </>
    );
};

export default Team;