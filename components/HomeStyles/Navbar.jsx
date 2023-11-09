"use client"

import Link from 'next/link'
import React, { useState , useEffect } from 'react'
import Wrapper from '../Wrapper'
import MobileMenu from '../menu/MobileMenu'
import { BiMenuAltRight } from "react-icons/bi";
import {BsFillHeartFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import Login from '../login/Login'
import Signup from '../signup/Signup'
import { userData } from '@/utils/Helper'
// import Logout from '../logout/Logout'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';






const Navbar = () => {
  // const [categoryMenu , setCategoryMenu] = useState(true)
  const router = useRouter()
  const [mobileMenu , setMobileMenu] = useState(false)
  const [ showCartMenu , setshowCartMenu] = useState(false)
  const [show , setShow] = useState('translate-y-0')
  const [lastScrollY , setLastScrollY] = useState(0)
  const [showButton , setShowButton] = useState(false)


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
    <div
    
    className={`w-full h-[50px] md:h-[60px] bg-primary-500 flex items-center justify-between z-10 sticky top-0 transition-transform duration-300 ${show}`}
    > 
     
      {/*Category menu start */}
      {/* <div className='w-8 md:w-12 invisible md:visible md:fixed h-8 md:h-12 absolute rounded-full flex justify-center items-center hover:bg-primary-500 cursor-pointer  -mr-2' >
              
              {
               categoryMenu ? (
                 <VscChromeClose className=' text-[16px]' onClick={() => {
                  setCategoryMenu(false)
            
                 }} />
               ) : (
                 <BiMenuAltRight className='text-[20px] ' onClick={() => {
                  setCategoryMenu(true)
               
                 }} />
               )
              }

             </div> */}
               {/*Category menu end */}

     <Wrapper className={`h-[68px] flex justify-between items-center`}>
      <Link href='/'>
      <p className={`font-bold text-xl font-roboto text-[10px] md:text-[25px] text-secondary-400 `} >Sohoj Bazar</p>
      </Link>
       
       
      
      {/* Menu Item Start */}
      
       
          {/* <Menu categoryMenu={categoryMenu} setCategoryMenu={setCategoryMenu} /> */}
        
      
      {/* Menu Item End */}

      {/* Mobile Menu Start */}
        
        {mobileMenu && (
          <div>
            <MobileMenu setShowCartMenu={setshowCartMenu} showCartMenu={showCartMenu} setMobileMenu={setMobileMenu} />
          </div>
        )}

      {/* Mobile Menu End */}




      <div className="flex items-center gap-2 text-black">
             {/* Icon start */}
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                  <BsFillHeartFill   className="text-[19px] md:text-[24px] text-secondary-400 " />
                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-primary-300 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            51
                    </div>
                </div>

              {/* Icon end */} 
               
               {/*Mobile menu start */}
              <div className='w-8 md:w-12 visible md:invisible md:absolute h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-primary-500 cursor-pointer relative -mr-2' >
              
               {
                mobileMenu ? (
                  <VscChromeClose className=' text-[16px]' onClick={() => setMobileMenu(false)} />
                ) : (
                  <BiMenuAltRight className='text-[20px] ' onClick={() => setMobileMenu(true)} />
                )
               }

              </div>
                {/*Mobile menu end */}
              
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
                    className='bg-secondary-500 text-[10px] md:text-[15px] px-1 md:py-1 md:px-3 py-0 rounded-md  text-primary-200 font-roboto'
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
                className='bg-secondary-500 text-[10px] md:text-[15px] px-1 md:py-1 md:px-3 py-0 rounded-md  text-primary-200 font-roboto'
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
  )
}

export default Navbar;