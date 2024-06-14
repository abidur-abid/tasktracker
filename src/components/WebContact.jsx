import React, { useRef } from 'react';
import { GrContact } from "react-icons/gr";
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import contact from '../assets/contact.png';

const WebContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_service_id,
            import.meta.env.VITE_template_id,
            form.current,
            import.meta.env.VITE_public_key
        ).then((result) => {
            toast.success('Successfully sent message');
            e.target.reset();
        }, (error) => {
            console.error('Error sending email:', error.text);
            toast.error('Failed to send message');
        });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="customRow mx-auto p-5 lg:p-10 rounded-lg">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <img
                            src={contact}
                            alt="Contact Us"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-transparent border-2 border-primaryColor shadow appearance-none rounded w-full py-3 px-3 leading-tight focus:outline-none"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-transparent border-2 border-primaryColor shadow appearance-none rounded w-full py-3 px-3 leading-tight focus:outline-none"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="bg-transparent border-2 border-primaryColor shadow appearance-none rounded w-full py-3 px-3 leading-tight focus:outline-none"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="secondaryButton flex items-center justify-center space-x-2"
                            >
                                <GrContact />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebContact;
