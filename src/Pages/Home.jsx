import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/Logo.png'
import pic from '../assets/pic.png'
import dc from '../assets/datacenter.png'
import dcs from '../assets/dcsupp.png'

import one from '../assets/buyers/1.png'
import two from '../assets/buyers/2.png'
import three from '../assets/buyers/3.png'
import four from '../assets/buyers/4.png'
import five from '../assets/buyers/5.png'
import six from '../assets/buyers/6.png'
import seven from '../assets/buyers/7.png'
import eight from '../assets/buyers/8.png'
import nine from '../assets/buyers/9.png'
import ten from '../assets/buyers/10.png'
import eleven from '../assets/buyers/11.png'
import twelve from '../assets/buyers/12.png'
import thirteen from '../assets/buyers/13.png'
import fourteen from '../assets/buyers/14.png'
import fifteen from '../assets/buyers/15.png'
import sixteen from '../assets/buyers/16.png'
import seventeen from '../assets/buyers/17.png'
import eighteen from '../assets/buyers/18.png'

import cli1 from '../assets/cli1.png'
import cli2 from '../assets/cli2.png'
import cli3 from '../assets/cli3.png'



import Hero from '../Components/Hero';

import { FiArrowUpRight } from "react-icons/fi";
import { FaStar } from 'react-icons/fa';


function Home() {
 const options = [
  { title: "Supply Chain Resilience", text: "Guaranteed Access to Pre-Vetted, Redundant Suppliers Mitigate risks of delays, shortages, or geopolitical disruptions with a curated  network of certified sub-suppliers across regions." },
  { title: "Cost Optimization at Scale", text: "Dynamic Pricing Transparency & Volume Aggregation Leverage real-time market intelligence and aggregated global demand to negotiate competitive pricing for high-volume purchases." },
  { title: "Sustainability Assurance", text: "Pre-Certified Suppliers Meeting Global Standards. Pre-vetted, compliant suppliers streamline due diligence and ensure alignment with ISO standards, energy efficiency, and ESG goals." },
 ];
 const tabs = ["Consultants", "Contractors", "Original Equipment Manufacturer", "Power"];
 const images = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen];
 const ratings = [
  {
   "img":cli1,
   "name": "Sarah Johnson",
   "position": "Procurement Manager",
   "quote": "ProcureDC has transformed how we manage our data center procurement. The platform is intuitive and the cost savings are significant.",
   "rating": 5
  },
  {
   "img":cli2,
   "name": "Tyler Smith",
   "position": "IT Director",
   "quote": "The supplier verification process gives us peace of mind. We've found reliable partners and streamlined our operations.",
   "rating": 4
  },
  {
   "img":cli3,
   "name": "Michael Chen",
   "position": "Operations Manager",
   "quote": "As a supplier, the platform has opened up new markets for us. The analytics tools help us make data-driven decisions.",
   "rating": 5
  }
 ]

 const [active, setActive] = useState("Consultants");
 const [buysup, setBuySup] = useState("Buyers");
 return (
  <main className='bg-[var(--Light)]/40 space-y-20'>
   <Hero />

   <section className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 space-y-10'>
    <article className="space-y-6">
     <p className='inline-block p-2 text-[var(--Secondary)] bg-[var(--Secondary)]/30 rounded-lg font-bold'>WHO WE ARE</p>
     <h1 className='font-bold text-4xl lg:text-6xl text-[var(--Primary)]'>Powering the Future of Data Centers, One Connection at a Time</h1>
    </article>
    <article className="flex justify-center">
     <img src={logo} className='h-80 w-60 md:w-96' />
    </article>

   </section>

   <section className='border-b-4 mx-5 md:mx-20 border-[var(--Light)]'></section>

   <section className='px-5 md:px-20 space-y-10'>
    <article className="space-y-6">
     <div className="w-80 md:w-[60%]">
      <h1 className='font-bold text-4xl lg:text-6xl'>See How ProcureDC Transforms Procurement</h1>
      <p className='text-gray-500 text-lg lg:text-2xl'>Watch how we connect buyers and suppliers through an intuitive, data-driven platform.</p>
     </div>
    </article>

    <img src={pic} className='h-[600px] w-full' />
   </section>

   <section className="relative w-full p-5 md:p-20">
    {/* Background Image */}
    <div style={{ backgroundImage: `linear-gradient(450deg,rgba(20,58,162,0.4), transparent), url(${dc})` }}
     className="absolute inset-0 bg-cover bg-center w-full h-full"></div>

    {/* Content goes here */}
    <article className="relative space-y-10 md:space-y-20 z-10 text-white p-4">
     <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="space-y-6 md:space-y-10">
       <h1 className="text-5xl md:text-6xl font-bold">Data Center Hyperscaler Buyer</h1>
       <p className="text-lg md:text-2xl">Scale Smarter: Source Globally, Save Aggressively, Sustain Seamlessly</p>
      </div>
      <div></div>
     </div>

     {/* Options Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
       options.map((option, index) => (
        <div key={index} className="bg-[var(--Primary)]/40 rounded-2xl space-y-6 p-10 backdrop-blur-sm relative border-2 border-transparent hover:border-white transition-colors duration-600">
         <h1 className='font-bold text-2xl'>{option.title}</h1>
         <p className='text-xl'>{option.text}</p>

         <Link className="absolute text-white bottom-4 right-8 text-4xl hover:bottom-10 hover:right-4 transition duration-600">
          <FiArrowUpRight className='' />
         </Link>
        </div>
       ))
      }
     </div>
    </article>
   </section>

   <section className='px-5 md:px-20 space-y-10'>
    <article className='flex flex-col md:flex-row gap-8 justify-between items-center'>
     <div className="space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold">Data Center Suppliers</h1>
      <p className="text-lg md:text-xl text-gray-600">Be the Go-To Supplier for Global Data Center Giants</p>
     </div>
     <button className='px-10 py-4 text-2xl font-bold rounded-xl flex items-center gap-x-3 bg-gradient-to-r from-[var(--Primary)] to-[var(--Secondary)] text-white hover:to-[var(--Primary)] ease-linear transition duration-300'>Talk to an Expert <FiArrowUpRight className='text-4xl' /></button>
    </article>

    <article className='grid grid-cols-1 md:grid-cols-2'>
     <div className='space-y-10 hidden md:inline-block'>
      {tabs.map((tab, index) => <button key={index} onClick={() => setActive(tab)}
       className={active == tab ? 'w-full text-4xl text-start rounded-tl-2xl font-bold bg-gradient-to-r from-[var(--Primary)] to-[var(--Secondary)] text-white flex items-center justify-between p-4 py-6 px-10 hover:to-[var(--Primary)] ease-linear transition duration-300' : 'w-[90%] text-[var(--Primary)] text-4xl text-start font-bold bg-white p-4 py-6 px-10 flex items-center justify-between'}>
       {tab}  <FiArrowUpRight className='text-5xl' /></button>)
      }
     </div>

     <div className='space-y-10 my-10 md:hidden grid md:grid-cols-1'>
      {tabs.map((tab, index) => <button key={index} onClick={() => setActive(tab)}
       className={active == tab ? 'text-xl md:text-4xl text-start rounded-tl-2xl font-bold bg-gradient-to-r from-[var(--Primary)] to-[var(--Secondary)] text-white py-6 px-10 hover:to-[var(--Primary)] ease-linear transition duration-300' : 'text-[var(--Primary)] text-xl md:text-4xl text-start font-bold bg-white py-6 px-10'}>
       {tab}</button>)
      }
     </div>

     <div className='p-4 md:p-10 space-y-4 bg-white'>
      <img src={dcs} />
      <h1 className='text-3xl font-bold'>Title Here</h1>
      <p className='text-md'>Join the Network Where Suppliers Become Hyperscale Heroes.</p>
     </div>
    </article>
   </section>

   <section className='px-5 md:px-20 space-y-10'>
    <article className="space-y-6">
     <h1 className="text-4xl md:text-6xl font-bold">Trusted by Industry Leaders</h1>
     <p className="text-lg md:text-xl text-gray-600">Join hundreds of companies worldwide that trust us to power their business</p>
    </article>

    <article className="gap-x-10 gap-y-8 flex flex-col md:flex-row">
     <button onClick={() => setBuySup("Buyers")}
      className={`text-4xl py-4 px-20 rounded-2xl ${buysup === "Buyers" ? 'font-semibold bg-[var(--Primary)] text-white' : 'bg-white text-[var(--Primary)]'}`}>
      Buyers
     </button>
     <button onClick={() => setBuySup("Suppliers")}
      className={`text-4xl py-4 px-20 rounded-2xl ${buysup === "Suppliers" ? 'font-semibold bg-[var(--Primary)] text-white' : 'bg-white text-[var(--Primary)]'}`}>
      Suppliers
     </button>
    </article>

    <article className='bg-white shadow-xl rounded-2xl grid grid-cols-3 md:grid-cols-6 gap-8 p-4'>
     {images.map((img, index) => <img key={index} src={img} className='hover:scale-125' />)}
    </article>
   </section>

   <section className='px-5 md:px-20 space-y-10'>
    <article className="space-y-6">
     <h1 className="text-3xl md:text-6xl font-bold">What Our Clients Say</h1>
    </article>

    <article className='drop-shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 p-4'>
     {ratings.map((rat, index) =>
      <art key={index} className='bg-white rounded-2xl p-6 space-y-6'>
       <div className='grid grid-cols-6 md:grid-cols-5 gap-x-4'>
        <img src={rat.img} className='col-span-2 md:col-span-1 hover:scale-200 transition-transform duration-300 ease-in-out' />
        <div className="col-span-4">
         <h3 className='font-bold text-2xl'>{rat.name}</h3>
         <p className='text-gray-600'>{rat.position}</p>
        </div>
       </div>

       <p className='text-lg text-gray-600'>{rat.quote}</p>

       <div className='flex gap-x-2'>
        {Array.from({ length: rat.rating }).map((_, index) => (
         <FaStar key={index} className='text-[var(--Primary)] text-xl' />
        ))}
       </div>
      </art>)}
    </article>
   </section>
  </main>
 )
}

export default Home
