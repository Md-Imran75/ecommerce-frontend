import React from 'react'

const Block2 = () => {
  return (
    <div className=' mt-5 md:block hidden '>
        <div className='flex justify-between'>
            <div className='bg-primary-500  rounded-md  md:mx-2 shadow-md h-[100px]'>
                <p className='px-[20px] font-roboto font-bold text-neutral-500 my-[30px] ' >+15000 products to shop from</p>
            </div>
            <div className='bg-primary-500 rounded-md md:mx-2 shadow-md h-[100px]'>
                <p className='px-[20px] font-roboto font-bold text-neutral-500 my-[30px] '>Pay after receiving products</p>
            </div>
            <div className='bg-primary-500 rounded-md md:mx-2 shadow-md h-[100px]'>
                <p className='px-[20px] font-roboto font-bold text-neutral-500 my-[30px] '>Get offers that Save Money</p>
            </div>

        </div>
    </div>
  )
}

export default Block2