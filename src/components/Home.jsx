import React from 'react';
import harshimg from '../assets/harsh.jpeg';
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-scroll';


export const Home = () => {
  return (
    <div name='home' className='h-full w-full bg-gradient-to-b from-gray-800 via-black to-black pt-36'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white'>
            Welcome to my Website, here's who I am and what I do
          </h2>

          <br />
          <p className='text-gray-200 py-4 max-w-screen-md'>
            I’m currently pursuing a B.Tech in Information Technology at Vishwakarma Institute of Technology. With a background in <b>C</b>, <b>C++</b> and <b>Python</b>, I’ve expanded my skills to include the <b>MERN stack, AI/ML, and Cybersecurity</b>. I’ve worked on projects involving <b>Real-Time Web Applications</b>, <b>Microcontrollers and embedded systems</b>, <b>Agentic AI</b>, <b>Penetration testing tools</b> and much more ! <br /> Always eager to learn and embrace new challenges, I’m passionate about advancing my technical skills and exploring new opportunities in the tech field.
          </p>
          <div>
            <br />
            <Link
              to='portfolio'
              smooth={true}
              duration={500}
              className='group text-white px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-blue-700 to-cyan-300 cursor-pointer hover:scale-105 transition-transform duration-300'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <IoIosArrowDropright size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className='flex justify-center md:justify-end w-3/4 ml-0 -mr-12'>
        <img src={harshimg} alt='myImg' className='rounded-2xl w-3/4 md:w-[300px] lg:w-[400px] xl:w-[500px] ml-0 md:ml-auto px-1' />
        </div>
      </div>
    </div>
  );
};

export default Home;
