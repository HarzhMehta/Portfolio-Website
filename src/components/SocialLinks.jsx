import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Added FaYoutube import
import { HiOutlineMail } from 'react-icons/hi';

export const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/harsh-mehta-90933921b/",
            style: 'rounded-tr-md'
        },
        {
            id: 2, // Changed id to ensure unique values
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/HarzhMehta",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:mehtaharsh3012@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    YouTube <FaYoutube size={30} /> {/* Changed icon to FaYoutube */}
                </>
            ),
            href: "https://www.youtube.com/@HarzhMehta",
            style: 'rounded-br-md'
        }
    ];

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li 
                        key={id} 
                        className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
                    >
                        <a 
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
