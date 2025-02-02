import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3g26jmc', 'template_s7q2er5', form.current, 'dV9HZl2bzlrncCN-S')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me!</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
                        <input
                            type='text'
                            name='user_name'
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />

                        <input
                            type='email'
                            name='user_email'
                            placeholder='Enter your email'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'
                        />

                        <textarea
                            name='message'
                            placeholder='Enter your message'
                            rows='10'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>

                        <button type='submit' className='bg-gradient-to-b from-cyan-500 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Let's connect!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};