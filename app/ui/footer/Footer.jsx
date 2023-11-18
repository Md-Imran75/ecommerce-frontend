import React from 'react';
import Wrapper from '../wrapper/Wrapper';
import Link from 'next/link';
import LogoDesign from '../homepageUi/logo/LogoDesign';


const Footer = () => {
  return (
    <Wrapper>
        <div className='mt-[20px] md:mt-[10px] font-roboto mb-[60px] md:mb-[20px]' >
        <footer className="text-neutral-600 body-font">
  <div className="container px-0 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      
      <div className='md:ml-0 ml-[90px]'><LogoDesign/></div>
      
      <p className="mt-2 text-sm text-neutral-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-neutral-900 font-bold tracking-widest text-sm mb-3">IMPORTANT</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/'} className="text-neutral-600 hover:text-neutral-800">Home</Link>
          </li>
          <li>
          <Link href={'/about'} className="text-neutral-600 hover:text-neutral-800">About</Link>
          </li>
          <li>
          <Link href={'/products'} className="text-neutral-600 hover:text-neutral-800">All bike</Link>
          </li>
          <li>
          <Link href={'/contact'} className="text-neutral-600 hover:text-neutral-800">Contact</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-neutral-900 tracking-widest text-sm mb-3">OUR POLICY</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href={'/privacy'} className="text-neutral-600 hover:text-neutral-800">Privacy Policy</Link>
          </li>
          <li>
          <Link href={'/refund'} className="text-neutral-600 hover:text-neutral-800">Refund Policy</Link>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-neutral-900 tracking-widest text-sm mb-3">BLOG</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href={'/blogs'} className="text-neutral-600 hover:text-neutral-800">Our latest blogs</Link>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-neutral-900 tracking-widest text-sm mb-3">OUR TEAM</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href={'/founders'} className="text-neutral-600 hover:text-neutral-800">Founders</Link>
          </li>
          <li>
          <Link href={'/techteam'} className="text-neutral-600 hover:text-neutral-800">Tech Team</Link>
          </li>
          <li>
          <Link href={'/employees'} className="text-neutral-600 hover:text-neutral-800">Employees</Link>
          </li>
          
        </nav>
      </div>
    </div>
  </div>

  <div className='border-t-2 border-t-background-500 '>
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-neutral-500 text-sm font-bold text-center sm:text-left">© 2023 BIKE HAAT —
        <a href="https://studokan.com." rel="noopener noreferrer" className="text-neutral-600 ml-1" target="_blank">Developed by WEB LAGBE</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-neutral-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-neutral-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-neutral-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-neutral-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

       </div>
    </Wrapper>
  );
};

export default Footer;
