import React from 'react';
import python_vs_cpp from '../assets/python_vs_cpp.webp';
import aiml from '../assets/aiml.jpg';
import linux from '../assets/linux.jpg';
import mern from '../assets/mern.png';
import network from '../assets/network.jpg';
import github from '../assets/github.jpg';
import me from '../assets/me1.jpeg';
import embededsystem from '../assets/embededsystem.png'
export const Experience = () => {
    const technologies = [
        {
            id: 1,
            src: mern,
            title: 'Web Developer at IEEE SB VIT Pune',
        },
        {
            id: 7,
            src: me,
            title: 'Instructor at AI Agents Workshop',
        },
        {
            id: 2,
            src: python_vs_cpp,
            title: 'C, C++ and Python',
        },
        {
            id: 3,
            src: linux,
            title: 'Linux',
        },
        {
            id: 4,
            src: aiml,
            title: 'AI & ML',
        },
        {
            id: 5,
            src: network,
            title: 'Computer Networking',
        },
        {
            id: 6,
            src: github,
            title: 'Version Control',
        },
        
        {
            id: 8,
            src: embededsystem,
            title: 'Embedded Systems',
        },
    ];

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full   h-full pt-32 '>
            <br />
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>Roles & Technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                    {technologies.map(({ id, src, title }) => (
                        <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                            <img
                                src={src}
                                alt={title}
                                className='w-full h-40 object-cover rounded-md duration-300 hover:scale-105'
                            />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
