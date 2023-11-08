import React from 'react'
import Link from 'next/link'

const Category = ({category}) => {
  if (!category) {
    return null;
  }
   
 
  

  return (
    <div >
      <ul className="bg-primary-100   z-50   min-w-[230px] text-black">
        <h4 className='px-3 pt-3 font-roboto font-bold h-10'>Categories</h4>
        {category?.map((item) => {
          return (
            <Link key={item?.id} href={`/category/${item?.attributes?.slug}`}>
              
                <li className="h-9 text-sm flex justify-between items-center px-3 hover:bg-secondary-400 hover:text-primary-100 rounded-sm font-roboto">
                  {item?.attributes?.name}
                  <span className="opacity-50 text-sm"> {item?.attributes?.products?.data?.length} </span>
                </li>
              
            </Link>
          )
        })}
        
      </ul>
     
    </div>
  )
}

export default Category
