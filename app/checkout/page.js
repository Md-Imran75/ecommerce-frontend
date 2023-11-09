'use client'
import React from 'react'
import Link from 'next/link'
import { AiFillDelete } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { increaseCount, decreaseCount, removeFromCart } from '@/store'
import Wrapper from '@/components/Wrapper'
import ProtectRoute from '@/utils/ProtectRoute'

const Checkout = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)
  console.log(cart)
  return (
    <ProtectRoute>
    <div className="w-full font-roboto md:py-20">
      <Wrapper>
        {/* checkout screen  */}
        {cart.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 py-10">


              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>

              

                {
                       cart.map((item) => (
            
              <div key={item.id} className='my-2 w-full md:w-1/2 bg-primary-200 py-2 px-3'>
               <div className='flex mt-2 justify-between'>
  
            <div className='h-[70px] w-[70px] '>
              <Image 
              alt={item.attributes.title}
              height={120}
              width={120}
              src={item.attributes.thumbnail.data.attributes.url}
              />
              </div>
  
             <div className='flex flex-col'>
             <div className=' w-[200px] leading-[18px] text-[18px]'>{item.attributes.title}</div>
             <div className='flex justify-start gap-4 mt-3'>

             <div className='flex justify-between'> 
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

              {/* quantity */}
              <div className=''>
                <b>Size:</b> {item.selectSize}
              </div>

              {/* colour */}
              <div>
                <b>Available: </b> {item.attributes.availableQTY}
              </div>

             </div>
             </div>
  
            <div className='flex mx-2 text-[12px] flex-col'>
             <button 
             onClick={() => dispatch(increaseCount({id: item.id}))}
             >+</button>
              <p>{item.quantity}</p>
             <button  onClick={() => dispatch(decreaseCount({id: item.id}))} >-</button>
            </div>
            <div className='flex flex-col'>

            <div className='text-[12px] mx-1'> &#2547;{item.attributes.price}</div> 
            <button onClick={() => dispatch(removeFromCart({id: item.id}))} className='ml-auto mt-1'> <AiFillDelete/> </button>
            
            </div>
  
          </div>
        </div>
            
          )
        )}

              </div>
              {/* CART ITEMS END */}
              <div>
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
            />
            <span className="text-xl font-bold">Your checkout is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link href="/products">
              <button className="bg-secondary-500 text-primary-100 px-2 py-2 rounded-sm">Continue Shopping</button>
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
    </ProtectRoute>
  )
  
}

export default Checkout
