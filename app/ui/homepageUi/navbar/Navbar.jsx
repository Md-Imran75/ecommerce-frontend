"use client"

import Link from 'next/link'
import React, { useState , useEffect } from 'react'
import Wrapper from '../../wrapper/Wrapper'


import { FaWindowClose } from "react-icons/fa";
import {BsFillHeartFill } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import Login from '../../login/Login'
import Signup from '../../signup/Signup'
import { userData } from '@/utils/Helper'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import LogoDesign from '../logo/LogoDesign'
import SearchBox from '../searchBox/SearchBox'

import Brand from '../../brand/Brand';








const Navbar = () => {

  

  const router = useRouter()

  const [categoryMenu , setCategoryMenu] = useState(false)
  const [showButton , setShowButton] = useState(false)
  const [borderHome , setBorderHome] = useState(false)
  const [borderAbout , setBorderAbout] = useState(false)
  const [borderAllBike , setBorderAllBike] = useState(false)
  const [borderContact , setBorderContact] = useState(false)


  //logout button and profile show
  const [showLogout , setShowLogout] = useState(false)


  //use state for login modal
  
  const [isOpen , setIsOpen] = useState(false)

  //use state for singup modal

  const [isSignupOpen , setSignupOpen] = useState(false)

  //jwt token

  const userDataReturnValue = userData();
  const jwt = userDataReturnValue && userDataReturnValue.jwt;
   
   
   //logout condition start

   useEffect(() => {
    if(jwt){
      setShowButton(true)
    }
   }, [jwt])

   // logout condition end

   // logout toast message start
   const notify = () => {
    toast.success('Logout Successful.', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  
   // logout toast message end
  
  
  
  
  
  

  return (
    <div className='flex flex-col bg-white-100 sticky top-0 w-full  z-50 font-roboto'>

      <div
          className={`w-full h-[50px] md:h-[70px] flex items-center justify-between z-10 transition-transform duration-300 `}
       > 
     

               


     <Wrapper className={`h-[68px] flex justify-between items-center`}>
      <div>
      <Link href='/'>
       <LogoDesign/>
      </Link>
      </div>

       <div className=' w-[50px] md:w-[700px] px-10 md:block hidden '>
       <SearchBox/>
       </div>
       
      
      



      <div className="flex items-center gap-2 text-black">
             {/* wishlist Icon start */}
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                  <BsFillHeartFill   className="text-[19px] md:text-[24px] text-secondary-400 " />
                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-primary-300 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            51
                    </div>
                </div>

              {/* wishlist Icon end */} 




              {/*Login and logout  Button Start */}

                { showButton ? (

                  <div className='flex justify-between gap-5'>
                   <Link href={'/dashbord'}>
                   <div>
                    Dashboard
                   </div>
                   </Link>
                  <div>
                  <button
                    className='bg-secondary-500 text-[10px] md:text-[15px] px-1 md:py-1 md:px-3 py-0 rounded-md  text-white-200 font-roboto'
                    onClick={() => {
                      localStorage.setItem('user', '')
                      setShowButton(false)
                      notify()
                
                      router.push('/')
                    }}
                    >Logout</button>
                  </div>
                 
                  </div>
                ) :(
                  <div>

              <div>
              <button
                className='bg-secondary-500 text-[10px] md:text-[15px] px-1 md:py-1 md:px-3 py-0 rounded-md  text-white-200 font-roboto'
                onClick={() => setIsOpen(!isOpen)}
                >Login</button>
              </div>
             
              </div>
                )}           
                  
              {/*Login and logout Button End*/}
              
      </div>

     </Wrapper>

     {/* Login Modal Start */}
     {isOpen && <Login setIsOpen={setIsOpen} setShowLogout={setShowLogout} setSignupOpen={setSignupOpen} />}
     {/* Login Modal end */}

     {/* SIngUp Modal start */}
     {isSignupOpen && !isOpen && <Signup setSignupOpen={setSignupOpen} setIsOpen={setIsOpen} />}

     {/* SingUp Modal end */}

     
    </div>

       {/* navbar 2nd part */}
       <div className=' block  md:hidden bg-white-200 py-3'>
        
        <SearchBox/>
        
       </div>

      {/* Navbar 3 part */}
      <div className='bg-primary-100 py-3'>
       <div className=' font-medium  text-neutral-500'>
        {/* category render start */}
                 
        <Brand categoryMenu={categoryMenu} setCategoryMenu={setCategoryMenu} />

        {/* category render end */}

       <Wrapper>

        <div className='flex justify-between md:justify-start gap-[10px] md:gap-[200px] lg:gap-[430px]'>
          
          <div>
            {/*Category menu Icon Design start */}
            <div className=' cursor-pointer outline-double outline-neutral-500 text-[25px] md:text-[30px]' >
              
              {
               categoryMenu ? (
                 <FaWindowClose  onClick={() => {
                  setCategoryMenu(false)
            
                 }} />
               ) : (
                 <MdMenuOpen  onClick={() => {
                  setCategoryMenu(true)
               
                 }} />
               )
              }

             </div>
               {/*Category menu Icon design end */}

              

               


          </div>

            <div className='flex md:text-[15px] text-[11px] gap-3 justify-between uppercase font-roboto '>

               <div 
               onClick={() => {
                 setBorderHome(true)
                 setBorderAbout(false)
                 setBorderAllBike(false)
                 setBorderContact(false)
               }} 
               className={`${borderHome ? 'border-b-2 md:border-b-4' : ''}`}
               >
                <Link href={'/'}>Home</Link>
                </div>

               <div 
               onClick={() => {
                setBorderHome(false)
                setBorderAbout(true)
                setBorderAllBike(false)
                setBorderContact(false)
               }} 
               className={`${borderAbout ? 'border-b-2 md:border-b-4' : ''}`}>
                <Link href={'/about'}>About</Link>
                </div>

               <div onClick={() => {
                 setBorderHome(false)
                 setBorderAbout(false)
                 setBorderAllBike(true)
                 setBorderContact(false)
               }} 
               className={`${borderAllBike ? 'border-b-2 md:border-b-4' : ''}`} >
                <Link href={'/products'}>All Bike</Link>
                </div>


               <div onClick={() => {
                 setBorderHome(false)
                 setBorderAbout(false)
                 setBorderAllBike(false)
                 setBorderContact(true)
               }} 
               className={`${borderContact ? 'border-b-2 md:border-b-4' : ''}`}>
                <Link href={'/contact'}>Contact</Link>
                </div>

            </div>
        </div>

       </Wrapper>
       </div>
      </div>
    </div>
  )
}

export default Navbar;