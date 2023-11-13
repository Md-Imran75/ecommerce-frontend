'use client'

import React, { useEffect, useState } from 'react'
import ProductPageCarousel from '@/app/ui/ProductPage/ProductPageCurosel'
import Wrapper from '@/app/ui/wrapper/Wrapper'
import RelatedProductCurousel from '@/app/ui/ProductPage/RelatedProductCurousel'
import getAnything from '@/app/lib/getAnything'
import Markdown from 'react-markdown'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetailsPage = ({params}) => {

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
 
  const getProduct = async() => {

    const productSlug = params.slug
    const resProducts = await getAnything(`/api/products?populate=*&[filters][slug][$eq]=${productSlug}`)
    const dataProduct = await resProducts?.data
    const resSizes = await getAnything(`/api/sizes?populate=*&[filters][products][slug][$eq]=${productSlug}`)
    const dataSize = await resSizes?.data
    const relatedProducts = await getAnything(`/api/products?populate=*&[filters][slug][$ne]=${productSlug}`)
    const dataRelatedProducts = await relatedProducts?.data

    setData(dataProduct)
    setRelatedProductsData(dataRelatedProducts)
    setsize(dataSize)
    return data
 }  

  {/* products data */}
  const [data , setData] = useState([])

  {/* Relatedproducts data */}
  const [relatedProductsData , setRelatedProductsData] = useState([])

  {/* size data */}
  const [size , setsize] = useState([])

  {/* select size data */}
  const [selectSize , setSelectSize] = useState()

  {/*  show error data */}
  const [error , setError] = useState(false)


                useEffect(() => {
                   getProduct()
                } , [])

 
   

  return (

    <div className='w-full mt-[30px]   md:my-0 md:py-20'>
    <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10  gap-[50px] lg:gap-[100px] '>
      
     {/* left coloum start */}
     <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 '>
     <ProductPageCarousel data={data} />
     </div>
     {/* left coloum End */}


     {/* right coloum start */}
     <div className='flex-[1] py-3'>
       {/* Product Title */}
       <div className='text-[25px] text-neutral-500 font-roboto font-medium mb-2 leading-tight'>
        {data?.[0]?.attributes?.title}
       </div>

       {/* Product Subtitle */}

       <div className='text-lg font-roboto font-semibold mb-5'>
       
       </div>

       {/* product price */}
       <div className='text-lg text-neutral-500 font-semibold font-roboto'>
        Price: {data?.[0]?.attributes?.price} BDT
       </div>

       <div className='text-md font-medium text-neutral-500/[0.5] font-roboto'>
        incl. of taxes
       </div>

       <div className='text-md font-medium text-neutral-500/[0.5] mb-20 '>
            {`(Also includes all applicable duties)`}
       </div>

       {/* Product size range add */}
       
        
          <div className='mb-10'>
        {/* Heading Start */}
         
         {
          size?.[0]?.attributes && <div className='flex justify-between mb-2'>
          <div className="text-md font-semibold font-roboto">
            Select Size
          </div>
            <div className="text-md font-roboto font-medium text-black/[0.5] cursor-pointer">
              Select Guide
            </div>
       </div>
         }
        
       
        {/* Heading Start */}
         
         {/* Size Start */}
         <div id='sizeGrid' className='grid grid-cols-6 gap-2'>
           {
            size?.[0]?.attributes ? (
              size?.map((item) => {
                return(
                  <div key={item.id} className={`border rounded-sm text-center py-1 font-medium hover:border-neutral-300 cursor-pointer font-roboto ${selectSize === item?.attributes?.name ? 'bg-primary-500' : ''} `}
                  onClick={() => {
                    setSelectSize(item?.attributes?.name)
                    setError(false)
                  }}
                  >
                  {item?.attributes?.name}

                </div>
                )
              })
            ) : ''
           }

         </div>
          {/* Size End */}

          {/* Show error message start */}
               {
                 error && (<div className='text-secondary-600 mt-1 font-roboto'>
                   Size selection is required
                </div>)
              }
            
          {/* Show error message start */}

       </div>

       {/* Product size range add */}

         {/* Add to button Add */}
      
      <div className='flex justify-between mb-10'>
      <button className='w-[180px] h-[50px] mr-2 py-1 md:py-2 rounded-md lg:mr-5 xl:mr-[0] bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500 font-roboto ' onClick={() => {
        if(!selectSize && size?.[0]?.attributes){
          setError(true)
        }else{
          dispatch(addToCart({
            ...data?.[0],
            selectSize,
            oneProductPrice: data?.[0]?.attributes?.price

          }));
          notify()
        }
        document.getElementById('sizeGrid').scrollIntoView({
          block:'center',
          behavior:'smooth'
        })
      }}>Add to Garage</button>

      {/* Add to button end */}

      {/* Add to wishlist add */}

      <button className='w-[180px] h-[50px] py-1  md:py-2 rounded-md bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500 font-roboto '>Add to Wishlist</button>
      </div>

      {/* Add to wishlist end */}

      {/* Product description Add */}
       <div>
          <div className='text-lg font-bold mb-5 font-roboto'>
            Product Details
          </div>
            
          <div className='markdown text-md mb-5 font-roboto'>
             <Markdown>{data?.[0]?.attributes?.description}</Markdown> 
          </div>
       </div> 
      {/* Product description Add */}
        </div>
     {/* right coloum end */}
     </div>

    {/* related product curousel */}
     <div className='border-background-500 border px-5 py-10 mt-10'>
     <RelatedProductCurousel products={relatedProductsData} />
     </div>
      {/* related product curousel */}


    </Wrapper>
    </div>
  )
}

export default ProductDetailsPage