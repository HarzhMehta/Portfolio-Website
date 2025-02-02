import React from 'react';
import python_vs_cpp from '../assets/python_vs_cpp.webp';
import aiml from '../assets/aiml.jpg';
import linux from '../assets/linux.jpg';
import mern from '../assets/mern.png';
import network from '../assets/network.jpg';
import micro from '../assets/micro.jpg';
import portfolio from '../assets/portfoldio.png';
import ddos from '../assets/ddos.png'
import networkIntru from '../assets/networkIntru.jpg'
import accidentimg from '../assets/accidentdetection.jpg'
import skincancer from '../assets/skincancer.jpg'

export const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: aiml,
            title: 'RAG based PDF Search Tool',
            link: 'https://github.com/HarzhMehta/PDF_Search_Tool.git'
        },
       
        {
            id: 2,
            src: ddos, // Replace with your image path
            title: 'Realtime DDoS Detection System',
            link: 'https://www.linkedin.com/posts/harsh-mehta-90933921b_thrilled-to-share-our-latest-project-activity-7264323622184370177-ldHz?utm_source=share&utm_medium=member_desktop'
        },
        {
            id: 3,
            src: networkIntru, // Replace with your image path
            title: 'Network Intrusion Detection System',
            link: 'https://www.linkedin.com/posts/harsh-mehta-90933921b_cybersecurity-nids-networksecurity-activity-7237849222123798531-Bwb_?utm_source=share&utm_medium=member_desktop'
        },
        {
            id: 4,
            src: accidentimg, // Replace with your image path
            title: 'Accident Detection System with GPS & GSM',
            link: 'https://www.linkedin.com/posts/harsh-mehta-90933921b_arduino-iot-hardwareproject-activity-7204884039164428288-DPBH?utm_source=share&utm_medium=member_desktop'
        },
        {
            id: 5,
            src: portfolio, // Replace with your image path
            title: 'Portfolio Website',
            link: 'https://link-to-your-project4.com'
        },
        {
            id: 6,
            src: skincancer, // Replace with your image path
            title: 'Skin cancer classification website',
            link: 'https://link-to-your-project4.com'
        }
    ];

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pt-40'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, title, link }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                            <img src={src} alt={title} className='w-full h-48 object-cover duration-300 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <a href={link} target='_blank' rel='noopener noreferrer' className='w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>
                                    {title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;