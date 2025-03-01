import { useState } from 'react';
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 return (
  <nav className="px-10 md:px-24 py-4">
   <section className="w-full mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="text-white text-xl lg:text-4xl md:text-2xl flex gap-4 items-center font-bold">
     <img src={logo} className='w-14 md:w-20' />
     <p className='text-[var(--Primary)]'>ProcureDC</p>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-10 text-gray-600">
     <NavLink className='hover:text-gray-800' >Solutions</NavLink>
     <NavLink className='hover:text-gray-800' >Features</NavLink>
     <NavLink className='hover:text-gray-800' >Pricing</NavLink>
     <NavLink className='hover:text-gray-800' >Contact</NavLink>
    </div>

    <section className="space-x-4 hidden md:flex items-center">
     <NavLink className='text-[var(--Primary)]'>Sign In</NavLink>
     <button className='p-2 rounded-lg bg-gradient-to-r from-[var(--Primary)] to-[var(--Secondary)] hover:to-[var(--Primary)] ease-linear transition duration-300 text-white'>Request a Demo</button>
    </section>

    {/* Mobile Menu Button */}
    <section className="md:hidden">
     <button onClick={toggleMenu} className="text-[var(--Primary)] hover:text-gray-300 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
     </button>
    </section>
   </section>

   {/* Mobile Menu */}
   {isOpen && (
    <section className="md:hidden flex flex-col items-center text-[var(--Primary)] space-y-6 py-4 px-6">
     <NavLink href="#" className="">Home</NavLink>
     <NavLink href="#" className="">About</NavLink>
     <NavLink href="#" className="">Services</NavLink>
     <NavLink href="#" className="">Contact</NavLink>

     <section className="space-x-8 md:hidden flex items-center">
      <NavLink className='text-[var(--Primary)]'>Sign In</NavLink>
      <button className='p-2 rounded-lg bg-gradient-to-r from-[var(--Primary)] to-[var(--Secondary)] text-white'>Request a Demo</button>
     </section>
    </section>
   )}
  </nav>
 );
};

export default Navbar;
