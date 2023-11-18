'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { DiscountPriceCalculate } from '@/utils/Helper';
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ data }) => {
  
  // Check if the data prop is defined
  if (!data) {
    return null;
  }

  // Access the attributes property of the data prop
  const { attributes} = data;
  const {title , brand , orginalPrice , thumbnail , price} = attributes
  
 
  
  const dispatch = useDispatch()
  
  

  const notify = () => {
    toast.success('Success. Check your cart!', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };


  const handleAddToCart = () => {
    dispatch(addToCart({
      ...data,
      oneProductPrice: price,
      
    }));
    notify()
  };
  
  return (
    <div className='border border-background-500'>
     <div className=' h-full flex flex-col'>
     <Link
        className='flex-grow  transform font-roboto  bg-white-200 hover:scale-105 cursor-pointer duration-200'
        href={`/product/${attributes?.slug}`}
      >
        <Image

          width={500}
          height={500}
          src={thumbnail?.data?.attributes?.url}
          alt={title}
          loading='lazy'
        />
        <div className=' px-2  h-[75px]  text-neutral-500/[0.90]'>
          <h4 className=' text-[14px] font-medium mt-5 font-roboto h-[45px]'>
              {title.length > 50 ? (`${title.slice(0, 50)}...`) : title}
          </h4>
          <div className='flex justify-between mt-1 items-center text-neutral-500 font-roboto'>
            <p className='mr-1 text-[15px] font-semibold font-roboto text-secondary-400'>
            &#2547;{price}
            </p>

            <div className='uppercase font-roboto text-neutral-500/[0.90] font-bold text-[12px]'>
              {brand}
            </div>

          </div>
        </div>
      </Link>
      <button className='w-full bg-secondary-500 py-[8px] text-primary-100 mt-3 font-roboto font-bold'
      onClick={handleAddToCart}
      >
        Add to Garage
      </button>
     </div>
    </div>
  );
};

export default ProductCard;
