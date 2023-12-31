'use client'
import React, { useMemo, useState , useEffect } from 'react'
import Link from 'next/link'
import {AiFillDelete} from 'react-icons/ai'
import { useSelector , useDispatch } from 'react-redux'
import Image from 'next/image'
import { userData } from '@/utils/Helper'
import { removeFromCart } from '@/store'

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
  
  const subTotal = useMemo(() => {
    return cart.reduce((total , val) => total + val.attributes.price , 0 )
  }, [cart])
  return (

    
    <div className=' z-30 w-[350px] shadow-xl flex flex-col right-0 overflow-y-scroll h-full fixed  top-[125px] bg-background-200 '>
    
     {/* bike garage and close button add */}
    <div className='flex  flex-col' >

     <div className='flex z-50 py-2 px-4 fixed bg-white-100 w-[350px] shadow-md justify-between'>
      <div className='text-lg mr-[10px] text-neutral-400 font-bold' >Bike Garage</div>
      <div>
       <button 
       onClick={() => {
        return(
         setCartOpen(false)
        )
       }
       }
       className='bg-secondary-400 text-white-200 px-2' >
           Close
       </button>
      </div>
     
     </div>
    </div>
    {/* bike garage and close button end */}


    {/* product data map add */}
    <div className='mt-[60px] mb-[200px]'>
        
        {
          cart.length > 0 && (
            cart.map((item) => (
              
            <div key={item.id} className=' mx-2 shadow-sm z-50 my-2 bg-primary-300 py-2 px-3'>
            <div className='flex flex-col gap-5'>

             {/* image , titile start */}
            
            <div className='flex  justify-between'>
            <div>
              <Link href={`/product/${item.attributes.slug}`}>
              <div className='h-[40px] w-[60px]   mr-[15px]'>
              <Image 
              alt={item.attributes.title}
              height={120}
              width={120}
              src={item.attributes.thumbnail.data.attributes.url}
              />
              </div>
              </Link>
            </div>
  
            <div className=' text-neutral-500 w-full font-medium leading-[18px] text-[12px]'>{item.attributes.title}</div>
            </div>
            
             {/* imag e, title end */}
            

             {/* Brand , price and delete button start */}
            <div className='flex justify-between'>
              
              <div className=' w-2/3 text-neutral-500 font-roboto font-bold  leading-[18px] text-[12px]'>
              {`Brand: ${item.attributes.brand}`}
              </div>
              
            <div className='flex w-1/3 flex-col'>

            <div className='text-[13px] font-bold text-neutral-500 mx-1'> &#2547;{item.attributes.price}</div> 
            <button onClick={() => dispatch(removeFromCart({id: item.id}))} className='w-full text-neutral-500 ml-auto mt-1'> <AiFillDelete/> </button>
            
            </div>
            </div>
             {/* Brand , price and delete button end */}
           
          </div>
        </div>
            
          )
        )
        ) 
        
        }


        {
          cart.length < 1 && (
            (
              <>
               <div className='mt-[100px]'>
                <Image
                src={'/empty-cart.jpg'}
                height={500}
                width={500}
                alt={'empty-cart'}
                />
               </div>
              </>
            )  
          )
        }
       </div>
  
  
       {/* product data map end */}

   
   {/* checkout and subtototal add  */}

   <div className=' shadow-lg py-3 px-2 w-[350px]  fixed bg-primary-100  flex justify-between bottom-0'>
   <div>
    { !userJwt ? (<Link  href={'/checkout'} >
     <button className={` bg-secondary-500 py-1 text-white-200 px-[10px] `}>
        Checkout
     </button>
    </Link>) : 
    (
        <div>
          <button className={` cursor-not-allowed   bg-secondary-300 font-normal text-[10px] py-1 text-white-200  px-[5px] `}>
           Checkout
         </button>
        <p className='text-[10px] text-neutral-500'>please login for checkout</p>
        </div> 
       )

           }
            </div>

            <div className=' text-secondary-500  flex justify-between text-[12px] gap-2 '>
               <p className='font-bold  '>Subtotal:</p>
               <p> &#2547;{subTotal} </p>
            </div>

        </div>
   {/* checkout and subtototal end  */}
  
  </div>
      
    
  )
}

export default CartDesign