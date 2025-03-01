import React from 'react';
import herobg from '../assets/herobg.png';

import { FaCube, FaDatabase } from "react-icons/fa";
import { RiGlobeFill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

function Hero() {
 const stats = [{ icon: <FaDatabase className='text-8xl text-[var(--Secondary)]' />, number: '1000+', label: 'Hyperscale' }, { icon: <RiGlobeFill className='text-8xl text-[var(--Secondary)]' />, number: '120+', label: 'Countries' }, { icon: <FaCube className='text-8xl text-[var(--Secondary)]' />, number: '5000+', label: 'Suppliers' }, { icon: <CiLocationOn className='text-8xl text-[var(--Secondary)]' />, number: '10+', label: 'Suppliers' }];

 return (
  <section className="relative w-full p-5 md:p-20">
   {/* Background Image */}
   <div style={{ backgroundImage: `url(${herobg})` }} className="absolute inset-0 w-full h-full bg-cover bg-center"></div>

   {/* Content goes here */}
   <article className="relative space-y-10 md:space-y-20 z-10 text-white p-4">
    <div className="grid grid-cols-1 md:grid-cols-2">
     <div className="space-y-6 md:space-y-10">
      <h1 className="text-4xl md:text-6xl font-bold">Your One-Stop Platform for Data Center Procurement</h1>
      <p className="text-lg sm:text-xl">Empower your procurement process, expand your partnerships, and unlock unmatched purchasing power.</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
       <button className="bg-white font-bold text-[var(--Primary)] p-3 px-5 rounded-lg">
        Find Suppliers
       </button>
       <button className="border-2 border-white text-white p-3 px-5 rounded-lg">
        Join as a Supplier
       </button>
      </div>
     </div>
     <div></div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-black/60 lg:px-6 py-10 backdrop-blur rounded-4xl">
     {stats.map((stat, index) => (
      <div key={index} className="p-4 gap-x-2 flex items-center justify-center">
       <div>
        {stat.icon}
       </div>
       <div>
        <h1 className="text-4xl sm:text-5xl text-white font-bold">{stat.number}</h1>
        <p className="text-xl sm:text-3xl text-gray-300 font-semibold">{stat.label}</p>
       </div>
      </div>
     ))}
    </div>
   </article>
  </section>
 );
}

export default Hero;
