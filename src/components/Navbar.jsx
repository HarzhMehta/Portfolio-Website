import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'home' },
    
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
      <div>
        <h1 className='text-5xl font-signature'>Harsh Mehta</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li 
            key={id} 
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500'
          >
            <Link to = {link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      
      {/* Mobile Menu */}
      <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500 transition-transform duration-300 ${nav ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        {links.map(({ id, link }) => (
          <li 
            key={id} 
            className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200'
          >
            <Link onClick={()=>setNav(!nav)} to = {link} smooth duration={500}>{link}</Link>
          </li>
        ))}
         {/* Added contact info for  mobile view */}
         {nav && (
          <div className='flex flex-col items-center gap-4 mt-8 text-3xl'>
            <a href= 'https://github.com/HarzhMehta' alt ='github' className='text-gray-500'>GitHub</a>
            <a href='https://www.youtube.com/@HarzhMehta' alt='utube' className='text-gray-500'>YouTube</a>
            <a href='https://www.linkedin.com/in/harsh-mehta-90933921b/' alt='Linkedin' className='text-gray-500'>Linkedin</a>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
