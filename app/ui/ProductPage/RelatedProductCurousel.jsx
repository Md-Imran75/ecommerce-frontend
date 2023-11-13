import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const RelatedProductCurousel = ({products}) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

  return (
    <div className=" -z-50 "  >

     <div className="text-2xl font-bold mb-8">You Might Also Like</div>
     
       <Carousel
       containerClass='-mx-[10px]'
       itemClass='px-[10px] '  
       responsive={responsive}
       ssr={true}
       keyBoardControl={true}
       
       >
            
            
            {
              products?.map((item) => {
                return (
                  <div className=' h-full'>
                  <ProductCard key={item.id} data={item} />
                  </div>
                )
              })
            }
        
         
       </Carousel>

    </div>
  )
}

export default RelatedProductCurousel