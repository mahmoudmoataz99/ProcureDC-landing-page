import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';

const MainLayout = () => {
 return (
  <main className='w-full overflow-x-hidden'>
   <Navbar />
   <Outlet />
   <Footer />
  </main>
 );
};

export default MainLayout;
