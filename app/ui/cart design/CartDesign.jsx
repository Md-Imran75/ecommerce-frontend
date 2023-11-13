import React, { useMemo, useState , useEffect } from 'react'
import Link from 'next/link'
import {AiFillDelete} from 'react-icons/ai'
import { useSelector , useDispatch } from 'react-redux'
import Image from 'next/image'
import { increaseCount , decreaseCount, removeFromCart } from '@/store'
import { userData } from '@/utils/Helper'

const CartDesign = ({setCartOpen}) => {
  const {jwt} = userData()
  const [ userJwt , setUserJwt] = useState(true)
  useEffect(() => {
    if(jwt){
      setUserJwt(false)
    }
   }, [jwt])

  const dispatch = useDispatch()
  const {cart} = useSelector((state => state.cart))
  console.log( 'cart' , cart)
  const subTotal = useMemo(() => {
    return cart.reduce((total , val) => total + val.attributes.price , 0 )
  })
  return (
    <div className='flex w-full  h-full fixed z-50 text-neutral-500 font-roboto justify-between flex-row'>
 
      <div className='absolute overflow-y-scroll  items-center top-0 right-0 bg-primary-100 h-full w-[300px]'>
      {/* Shopping cart text and close button add */} 
      <div className='flex py-1 justify-between px-3 mt-3'>
      <div className='text-lg text-neutral-400 font-bold' >Shopping Cart</div>  

      <div onClick={() => setCartOpen(false)}><button className='bg-secondary-400 text-primary-200 px-2 '>Close</button></div>  
      </div> 
      {/* Shopping cart text and close button end */}

      {/* image price and increase/decrease button add */}

      
        {
          cart.map((item) => (
            
            <div key={item.id} className='my-2  bg-primary-200 py-2 px-3'>
          <div className='flex items-center  justify-between'>
  
            <div className='h-[40px] w-[60px]   mr-2'>
              <Image 
              alt={item.attributes.title}
              height={120}
              width={120}
              src={item.attributes.thumbnail.data.attributes.url}
              />
              </div>
  
            <div className=' w-[150px] leading-[18px] text-[13px]'>{item.attributes.title}</div>
  
            
            <div className='flex flex-col'>

            <div className='text-[12px] mx-1'> &#2547;{item.attributes.price}</div> 
            <button onClick={() => dispatch(removeFromCart({id: item.id}))} className='ml-auto mt-1'> <AiFillDelete/> </button>
            
            </div>
  
          </div>
        </div>
            
          )
        )}
           
       {/* image price increase decresa end */}    

      <div className=' text-[13px] bg-secondary-400 w-full bottom-0 sticky px-[15px]  flex justify-between'>

      { !userJwt ? (<Link  href='/checkout' >
      <button className={`mt-[18px]   font-bold bg-primary-500 py-1 text-nautral-200 px-[10px] mb-[80px]`}>
        Checkout
      </button>
      </Link>) : 
      (
       <div>
        <button className={`mt-[18px] cursor-not-allowed  font-bold bg-primary-500 py-1 text-nautral-200 px-[10px] `}>
        Checkout
       </button>
       <p className='text-[10px] text-primary-100'>please login for checkout</p>
       </div> 
      )
      
      }

    <div className='mt-[20px] text-primary-100 flex justify-between gap-2 '>
      <p className='font-bold'>Subtotal:</p>
      <p> &#2547;{subTotal} </p>
    </div>


      </div>

      </div>      


{/* image price and increase/decrease button end */}
      
      <div className='bg-neutral-900 opacity-30 -z-50  w-full'></div>
       
    </div>
  )
}

export default CartDesign