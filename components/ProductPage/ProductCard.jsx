import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { DiscountPriceCalculate } from '@/utils/Helper';

const ProductCard = ({ data }) => {
  // Check if the data prop is defined
  if (!data) {
    return null;
  }

  // Access the attributes property of the data prop
  const { attributes , id } = data;
  const {title , orginalPrice , thumbnail , price} = attributes
  
  return (
    <div>
     <div className='h-full flex flex-col'>
     <Link
        className='flex-grow  transform font-roboto  bg-white-200 hover:scale-105 cursor-pointer duration-200'
        href={`/product/${attributes?.slug}`}
      >
        <Image
          width={500}
          height={500}
          src={thumbnail?.data?.attributes?.url}
          alt={title}
        />
        <div className='  text-neutral-500/[0.90]'>
          <h4 className=' text-[14px] font-medium mt-5 font-roboto'>
            {title}
          </h4>
          <div className='flex items-center text-neutral-500 font-roboto'>
            <p className='mr-1 text-lg font-semibold mt-1 font-roboto text-secondary-400'>
            &#2547;{price}
            </p>

            { orginalPrice && (
              
                <>
                  <p className='text-[12px] font-medium line-through mt-1 font-roboto'>
                  &#2547;{orginalPrice}
                </p>
                <p className='ml-auto text-[12px]  font-medium mt-1 font-roboto'>
                   {DiscountPriceCalculate(orginalPrice , price)}
                   % off
                </p>
                
                </>
            )}


          </div>
        </div>
      </Link>
      <button className='w-full bg-secondary-500 py-[8px] text-primary-100 mt-3 font-roboto font-bold'>
        Add to Cart
      </button>
     </div>
    </div>
  );
};

export default ProductCard;
