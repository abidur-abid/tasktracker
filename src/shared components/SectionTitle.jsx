import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <section>
            <div className="customContainer">
                <div className="customRow max-w-2xl mx-auto">
                    <h2 className='sectionTitle'>{title}</h2>
                </div>
            </div>
        </section>
    );
};

export default SectionTitle;