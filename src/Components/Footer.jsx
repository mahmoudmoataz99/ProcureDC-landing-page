import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
 return (
  <footer className='bg-black text-white space-y-10 px-10 md:px-24 py-14'>
   <article className='grid grid-cols-1 gao-10 md:gap-20 md:grid-cols-4'>
    <section className='space-y-10 pt-10'>
     <h1 className='text-4xl font-bold'>ProcureDC</h1>
     <p className='text-[var(--Light)]'>Transforming data center procurement for the digital age.</p>
     <article className='flex gap-x-4 text-xl text-[var(--Light)]'>
      <FaTwitter className='hover:scale-125 hover:text-blue-400'/>
      <FaLinkedin className='hover:scale-125 hover:text-blue-500'/>
      <FaFacebook className='hover:scale-125 hover:text-blue-600'/>
     </article>
    </section>

    <section className='space-y-6 pt-10'>
     <h1 className='text-xl font-bold'>Solutions</h1>
     <ul className='text-lg space-y-2 list-none text-[var(--Light)]'>
      <li><Link>For Buyers</Link></li>
      <li><Link>For Suppliers</Link></li>
      <li><Link>Enterprise</Link></li>
      <li><Link>Pricing</Link></li>
     </ul>
    </section>

    <section className='space-y-6 pt-10'>
     <h1 className='text-xl font-bold'>Company</h1>
     <ul className='text-lg space-y-2 list-none text-[var(--Light)]'>
      <li><Link>About Us</Link></li>
      <li><Link>Careers</Link></li>
      <li><Link>Blog</Link></li>
      <li><Link>Press</Link></li>
     </ul>
    </section>

    <section className='space-y-6 pt-10'>
     <h1 className='text-xl font-bold'>Support</h1>
     <ul className='text-lg space-y-2 list-none text-[var(--Light)]'>
      <li><Link>Help Center</Link></li>
      <li><Link>Documentation</Link></li>
      <li><Link>Contact Us</Link></li>
      <li><Link>Status</Link></li>
     </ul>
    </section>
   </article>

   <article className='border-t-2 mx-5 md:mx-20 border-[var(--Light)]'></article>

   <article className='flex flex-col md:flex-row items-center justify-between space-y-4 text-[var(--Light)]'>
    <p>© 2025 ProcureDC. All rights reserved.</p>

    <ul className='text-md space-x-10 flex justify-around list-none text-[var(--Light)]'>
     <li>Privacy Policy</li>
     <li>Terms of Service</li>
     <li>Cookies Policy</li>
    </ul>
   </article>
  </footer>
 )
}

export default Footer
