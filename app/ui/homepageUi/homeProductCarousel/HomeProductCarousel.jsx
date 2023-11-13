import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../../ProductPage/ProductCard';

const HomeProductCarousel = ({products}) => {
    console.log(products)
    if (!Array.isArray(products)) {
        return null;
      }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
          <div className="mt-[50px] md:mt-[l00px] -z-50  md:mb-0"  >
      
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


export default HomeProductCarousel