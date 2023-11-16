
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const BrandDataForPagination = ({ data,page, pageCount, setPage , slug }) => {
 

  return (
    <div>
       
       <div className='grid grid-cols-2 grid-rows-1 h-full sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mt-5'>
      {data?.map((item) => (
        <Link key={item.id} href={`/model/${item?.attributes?.slug}`}>
        <div  className='border border-background-500'>
          <Image
            src={item.attributes.image.data.attributes.url}
            alt={item.attributes.name}
            height={500}
            width={500}
          />
          <div className='text-[12px] text-neutral-500 font-roboto mt-2 px-2 mb-2 py-1 md:h-[50px] h-[50px]'>
            {item.attributes.name}
          </div>
        </div>
        </Link>
      ))}
    </div>

    <div className='mt-2'>
          <button
            className={`mr-5 px-1 text-sm py-1 bg-secondary-500 text-white-300 ${
              page <= 1 ? 'cursor-not-allowed bg-secondary-200' : ''
            }`}
            onClick={() => {
              if (page > 1) {
                setPage((prevPage) => prevPage - 1);
              }
            }}
          >
            Prev
          </button>
          <button
            className={`mt-5 px-1 text-sm py-1 bg-secondary-500 text-white-300 ${
              pageCount === page ? 'cursor-not-allowed  bg-secondary-200' : ''
            }`}
            onClick={() => {
              if (page !== pageCount) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
          >
            Next
          </button>
        </div>

    </div>
  )
}

export default BrandDataForPagination



