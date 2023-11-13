'use client'
import getAnything from '@/app/lib/getAnything';
import postUser from '@/app/lib/postUser';
import React, { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = ({setIsOpen , setSignupOpen}) =>  {

 
 

  const notify = () => {
    toast.success('Sign Up Success. Please Login Now', {
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
    name:'',
    username: '',
    favorite:'',
    email:'',
    password: '',
  })

  const signUp = async(event) => {
    event.preventDefault();
    try{
     
      
      if(user.username && user.email && user.password){
        const res = await postUser(user)
        console.log(res)
        if(res){
          notify()
          setUser({
            username: '',
            favorite:'',
            email:'',
            password: ''
          })

          setIsOpen(true)
          setSignupOpen(false)
         
        }
   
      }
    }catch(error){
      toast.error( 'username or email already exist' , {
     
      hideProgressBar: true,
    
      })
    }
  }

const handleChange = ({target}) => {
  const {name , value} = target
  setUser((user) => ({
    ...user,
    [name]: value
  }))
}

  return (

    <section className="text-gray-600 z-50   md:mt-0 font-roboto fixed w-full h-full top-20 xl:top-10  ">
    

       <div className='flex flex-col mx-2   xl:mx-[480px] shadow-2xl lg:mx-[250px] md:mx-16 px-10 py-10 bg-primary-100'>
       
           <div className='flex justify-between'>
           <h2 className="text-gray-900 text-lg font-medium title-font mb-5">SingUp</h2>
           <button className='  text-secondary-500  text-4xl pb-4 '  onClick={() => setSignupOpen(false)}>  <AiFillCloseCircle/>   </button>
           </div>
           <div className="relative mb-2">
            <input type="text" id="name" name="name" value={user.name} onChange={handleChange} placeholder='full name' className="w-full text-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

           <div className="relative mb-2">
            <input type="text" id="username" name="username" placeholder='user name' value={user.username} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          
          <div className="relative mb-2">
            <input type="text" id="favorite" name="favorite" placeholder='favorite product' value={user.favorite} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-2">
            <input type="text" id="email" name="email" placeholder='email' value={user.email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-2">
            <input type="password" id="password" name="password" placeholder='password' value={user.password} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button onClick={signUp}  className="text-white bg-secondary-500 text-primary-100 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
           
          
          <p className="text-xs text-gray-500 mt-2">Already have an account? <button
           className=' text-secondary-500 font-extrabold '
          onClick={() => {
            setIsOpen(true)
            setSignupOpen(false)
          }}>Login</button></p>
    </div>

   
    </section>
  );
}

export default Signup;
