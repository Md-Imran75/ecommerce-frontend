import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const RelatedProductCurousel = ({products}) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 2,
        },
    };

  return (
    <div className="mt-[50px] md:mt-[l00px] mb-[100px] md:mb-0"  >

     <div className="text-2xl font-bold mb-5">You Might Also Like</div>
     
       <Carousel
       containerClass='-mx-[10px]'
       itemClass='px-[10px]'  
       responsive={responsive} >
            
            
            {
              products?.map((item) => {
                return (
                  <ProductCard key={item.id} data={item} />
                )
              })
            }
        
         
       </Carousel>

    </div>
  )
}

export default RelatedProductCurousel