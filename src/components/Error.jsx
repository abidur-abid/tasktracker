import React, { useEffect } from 'react';

const Error = ({error, reset}) => {

    useEffect( () => {
        console.error(error);
    }, [error])

    return (
        <section className=" ">
            <div className='text-center'>
                <h1 className='errorMessage'>
                    {error.message || "Something went wrong happened!"}
                </h1>
                <button className='button mt-4' onClick={()=> reset()}>
                    Reset
                </button>
            </div>  
        </section>
    );
};

export default Error;