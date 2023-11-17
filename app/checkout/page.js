'use client'
import React from 'react'
import Link from 'next/link'
import { AiFillDelete } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { increaseCount, decreaseCount, removeFromCart } from '@/store'
import Wrapper from '@/app/ui/wrapper/Wrapper'
import ProtectRoute from '@/utils/ProtectRoute'

const Checkout = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)
  
  return (
    <ProtectRoute>
    <div className="w-full font-roboto md:py-20">
      <Wrapper className={'border border-background-500 py-10'}>
        {/* checkout screen  */}
        {cart.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center  max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px]  uppercase md:text-[34px] mb-5 font-semibold leading-tight">
                Checkout your garage
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:flex-row gap-12 py-10">


              {/* CART ITEMS START */}
              <div className="flex-[2]">
                {cart.length === 1 ? (
                  <div className="text-lg mb-[10px] font-bold">My Bike</div>
                ): <div className="text-lg mb-[10px] font-bold">My Bikes</div>}

              

                {
                       cart.map((item) => (
            
              <div key={item.id} className='my-2 w-full  flex-col flex bg-primary-200 py-2 px-3'>
               <div className='flex mt-2 justify-between'>
  
            <div className=' h-[40px] w-[40px] md:h-[70px] md:w-[70px] '>
              <Image 
              alt={item.attributes.title}
              height={120}
              width={120}
              src={item.attributes.thumbnail.data.attributes.url}
              />
              </div>
  
             <div>
             <div className=' w-[100px] md:w-[150px] lg:w-[350px] leading-[18px] ml-2 text-[10px] md:text-[18px]'>{item.attributes.title}</div>
             </div>

            <div className='w-[60px]  md:ml-0 md:w-[100px]'>
            <div className=' text-[10px] md:text-[15px] font-bold mx-1'> &#2547;{item.attributes.price}</div> 
            </div>

          </div>
          
           
           {/* brand delete and model */}

           <div className='flex mt-3 justify-between'>
           <div className='flex text-[12px]  justify-between'>
            Model: 
             {/* categories */}
              {
                item.attributes.categories.data.map((item) => (
                    <div key={item.id} className='text-[10px]'>
                        <div  className={`border rounded-sm text-center px-[5px] bg-secondary-500 text-primary-100 font-medium hover:border-primary-500 cursor-pointer font-roboto`}>
                          {item.attributes.name}
                        </div>
                    </div>
                ))
              }

             </div>

              {/* brand name */}
              <div className='flex text-[12px] justify-start bg-secondary-500 px-2 py-1 text-primary-100 gap-2'>
                <b>Brand:</b> <p className='text-[12px] text-primary-100 '>{item.attributes.brand}</p>
              </div>
             
             <div className='text-[15px] md:text-[25px]'>
             <button onClick={() => dispatch(removeFromCart({id: item.id}))} className=' mt-1'> <AiFillDelete/> </button>
             </div>

           </div>

        </div>
            
          )
        )}

              </div>
              {/* CART ITEMS END */}
              
              <div className='w-full lg:w-1/2'>
                hello
              </div>
            </div>
           
          </>
        )}








        {/* This is empty screen */}
        {cart.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              alt='emty-cart-image'
            />
            <span className="text-xl font-bold">Your Garage is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added any bike in your garage.
              <br />
              Go ahead and explore top bike brand.
            </span>
            <Link href="/products">
              <button className="bg-secondary-500 mt-5 text-primary-100 px-2 py-2 rounded-sm">Continue Shopping</button>
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
    </ProtectRoute>
  )
  
}

export default Checkout
