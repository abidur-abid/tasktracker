import React from 'react';
import { Link } from "react-router-dom";
import notFound from "../assets/notFound.png";

const NotFound = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center  p-6">
            <img src={notFound} width={400} className="mx-auto mb-8" alt="Not Found" />
            <div className="flex justify-center mt-12">
                <Link to="/" className="secondaryButton">
                    Back To Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
