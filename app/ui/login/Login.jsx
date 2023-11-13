'use client'
import LoginUser from '@/app/lib/loginUser';
import { storeUser } from '@/utils/Helper';
import React, { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = ({setIsOpen , setShowLogout,  setSignupOpen}) =>  {

  const notify = () => {
    toast.success('Login Successful.', {
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

  const [user , setUser] = useState({
    identifier:'',
    password:''

  });

  const handleChange = ({target}) => {
     const {name , value} = target
     setUser((currentUser) => ({
      ...currentUser,
      [name]: value
     }))
  };

  const handleSubmit = async(event)=> {
    event.preventDefault();
    try{
      if(user.identifier && user.password){
        const {data} = await LoginUser(user)
        if(data.jwt){
          storeUser(data)
          notify()
          setUser({
            identifier:'',
            password:''
          })
          setShowLogout(true)
          setIsOpen(false)
        }
        
      }
    }catch(error){
      toast.error('Invalid credentials', {
        hideProgressBar: true
      })
    }
  }

  return (
    <section className="text-gray-600 z-50   md:mt-10 font-roboto fixed w-full h-full top-20  ">
    
 <div className='flex flex-col mx-2 xl:mx-[450px] shadow-2xl lg:mx-[250px] md:mx-16 px-10 py-10 bg-primary-100'>
    <div className='flex justify-between'>
    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
    <button className='  text-secondary-500  text-4xl  '  onClick={() => setIsOpen(false)}>  <AiFillCloseCircle/>   </button>
    </div>
          <div className="relative mb-4">
            <label htmlFor="identifier" className="leading-7 text-sm text-gray-600">Email or User Name</label>
            <input type="text" id="identifier" onChange={handleChange} value={user.identifier} name="identifier" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" onChange={handleChange} value={user.password} name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button onClick={handleSubmit} className="text-white bg-secondary-500 text-primary-100 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
          <p className="text-xs text-gray-500 mt-3">Don't have any account? 
          <button
          className=' text-secondary-500 font-extrabold '
          onClick={() => {
            setIsOpen(false)
            setSignupOpen(true)
          }}
          >Singup</button></p>
    </div>


      
    </section>
  );
}

export default Login;
